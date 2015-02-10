<?php
namespace common\models;

use Yii;
use yii\captcha\Captcha;
use yii\data\ActiveDataProvider;
use yii\db\ActiveRecord;
use yii\db\Expression;
use yii\web\IdentityInterface;
use yii\web\UploadedFile;

/**
 * User model
 *
 * @property integer $id
 * @property integer $balance
 * @property string $username
 * @property string $name
 * @property string $date_of_birth_day
 * @property string $date_of_birth_month
 * @property string $date_of_birth_year
 * @property string $s_status_title
 * @property string $activate_key
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $auth_key
 * @property integer $counrty_id
 * @property integer $role
 * @property integer $status
 * @property integer $expire_date
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $password write-only password
 */
class User extends ActiveRecord implements IdentityInterface
{
    public $password;
    public $captcha;
    public $passwordRepeat;
    public $validateScenario;
    public $image;
    public $oldPassword;
    public $swap;
    public $check;
    public $station;
    const ROLE_USER = 'user';
    const ROLE_ADMINISTRATOR = 'administrator';

    public static function getRoles(){
        return [
            self::ROLE_USER => 'Пользователь',
            self::ROLE_ADMINISTRATOR => 'Администратор',
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['role', 'default', 'value' => self::ROLE_USER, 'on'=>['signup']],
            ['role', 'in', 'range' => [self::ROLE_USER], 'on'=>['signup']],

            ['role', 'default', 'value' => self::ROLE_USER, 'on'=>['administrator']],
            ['role', 'in', 'range' => [self::ROLE_USER, self::ROLE_ADMINISTRATOR], 'on'=>['administrator']],

            ['username', 'required'],
            ['username', 'string', 'min' => 2, 'max' => 255],
            ['username', 'filter', 'filter' => function ($value) {
                return \common\filters\HtmlPurifier::escape( $value );
            }],

            ['email', 'required'],
            ['email', 'email'],
            ['email', 'unique', 'on'=>['signup', 'setEmail', 'profile']],
            ['email', 'filter', 'filter' => function ($value) {
                return \common\filters\HtmlPurifier::escape( $value );
            }],

            ['check', 'required','requiredValue'=>1, 'message'=>'Необходимо согласится с правилами'],
            ['check', 'integer'],

            ['captcha', 'required'],
            ['captcha', 'captcha'],

            [['out_balance', 'swap', 'in_balance'], 'number'],

            [['expire_date', 'referrals'], 'integer'],
            ['station', 'string'],

            ['password', 'required', 'message' => \Yii::t('app', 'Поле обязательное для заполнения.')],
            ['password', 'match', 'pattern'=>'/^[A-Za-z]/', 'message' => \Yii::t('app', 'Допустимы только англ. символы')],
            ['password', 'string', 'min' => 6, 'max'=>20, 'message' => \Yii::t('app', 'Пароль должен содержать больше 6 символов.')],
            ['passwordRepeat', 'compare', 'compareAttribute'=>'password', 'message'=>\Yii::t('app','Пароли не совпадают' )],
            [['oldPassword', 'password', 'passwordRepeat'], 'required', 'message' => \Yii::t('app', 'Поле обязательное для заполнения.') , 'on'=>['changePassword']]
        ];
    }

    /**
     * Сценарии
     * @return array
     */
    public function scenarios()
    {
        return [
            'administrator'=>['role','out_balance', 'station', 'in_balance', 'username', 'email','s_mail', 'linkedin', 's_git', 's_gplus', 's_vk', 'flickr', 's_tw','s_fb', 'subdomain', 'surname', 'my_site', 'phone_mob', 'phone', 'balance', 'skype' ],
            'signup'                    => ['role','captcha','check', 'username', 'email', 'password', 'passwordRepeat'],
            'setEmail'                  => ['email', 'password'],
            'activate'                  => ['activate_key'],
            'resetPassword'             => ['password'],
            'requestPasswordResetToken' => ['email', 'password_reset_token'],
            'changePassword'            => ['oldPassword', 'password', 'passwordRepeat'],

            'buy' => ['in_balance','out_balance'],
            'lutz' => ['in_balance','out_balance'],
            'swap' => ['in_balance','out_balance', 'swap'],
            'online' =>['online'],
            'referrals' =>['referrals'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at', 'updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'subdomain'=> \Yii::t('app','Адрес сайта'),
            'username' => \Yii::t('app','Имя'),
            'email'    => 'E-Mail',
            'password' => \Yii::t('app','Новый пароль:'),
            'name' => \Yii::t('app','Имя'),
            'surname' => \Yii::t('app','Фамилия'),
            'out_balance' => \Yii::t('app','Баланс на вывод'),
            'in_balance' => \Yii::t('app','Баланс для внутренних покупок'),
            'created_at' => \Yii::t('app','Дата регистрации'),
            'role' => \Yii::t('app','Роль'),
            'passwordRepeat' => \Yii::t('app','Поврорите пароль:'),
            'oldPassword' => \Yii::t('app','Старый пароль:'),
            'swap' => \Yii::t('app',''),
            'station' => \Yii::t('app','Станции'),
            'captcha' => \Yii::t('app','Код на картинке'),
            'check' => \Yii::t('app',''),
        ];
    }



    /**
     * Регистрация
     * @return User|null
     */
    public function signup()
    {
        /** @var User $user */
        $this->generateAuthKey();
        if ($this->save()) {
            \Yii::$app->authManager->assign(\Yii::$app->authManager->getRole(self::ROLE_USER), $this->id);
            return $this;
        } else {
            return false;
        }
    }



    /**
     * @param $key
     *
     * @return array|null|ActiveRecord
     */
    public static function findByAuthKey($key){
        return static::find()->where(['auth_key'=>$key])->one();
    }

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }


    /**
     * Finds user by username
     *
     * @param  string      $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username]);
    }

    /**
     * Finds user by username
     *
     * @param  string      $username
     * @return static|null
     */
    public static function findByEmail($email)
    {
        return static::findOne(['email' => $email]);
    }


    /**
     * Finds user by password reset token
     *
     * @param  string      $token password reset token
     * @return static|null
     */
    public static function findByPasswordResetToken($token)
    {
        $expire = \Yii::$app->params['user.passwordResetTokenExpire'];
        $parts = explode('_', $token);
        $timestamp = (int) end($parts);
        if ($timestamp + $expire < time()) {
            // token expired
            return null;
        }

        return static::findOne([
            'password_reset_token' => $token,
        ]);
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param  string  $password password to validate
     * @return boolean if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return \Yii::$app->security->validatePassword($password, $this->password_hash);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password_hash = \Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->auth_key = \Yii::$app->security->generateRandomKey();
    }

    public function generateActivateKey()
    {
        $this->activate_key = \Yii::$app->security->generateRandomKey();
    }

    /**
     * Generates new password reset token
     */
    public function generatePasswordResetToken()
    {
        $this->password_reset_token = \Yii::$app->security->generateRandomKey() . '_' . time();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }

    /**
     * Активация учетки
     *
     * @param $token
     *
     * @return int
     */
    public static function activate($token){

        $oUser = User::find()->andWhere(['activate_key' => $token])->one();

        if( $oUser !== null ){

            $oUser->setScenario('activate');

            $oUser->activate_key = '';

            return $oUser->save();
        }

        return false;
    }

    /**
     * @return null|IdentityInterface|User
     */
    public static function u(){
        return \Yii::$app->user->identity;
    }

    public function sendActivateEmail()
    {
        return \Yii::$app->mail->compose('passwordActivateToken', ['user' => User::u()])
            ->setFrom([\Yii::$app->params['supportEmail'] => 'moreoil.net'])
            ->setTo(User::u()->email)
            ->setSubject('Активация учетной записи. ' . \Yii::$app->name)
            ->send();
    }

    public function sendResetPasswordRequestEmail()
    {
        /** @var User $user */
        $user = User::findOne([
            'email' => $this->email,
        ]);

        if ($user) {
            $user->setScenario('requestPasswordResetToken');

            $user->generatePasswordResetToken();

            if ($user->save()) {
                return \Yii::$app->mail->compose('passwordResetToken', ['user' => $user])
                    ->setFrom([\Yii::$app->params['supportEmail'] => 'moreoil.net'])
                    ->setTo($this->email)
                    ->setSubject('Сброс пароля. ' . \Yii::$app->name)
                    ->send();
            }
        }

        return false;
    }

    public function beforeSave($insert){
        if(parent::beforeSave($insert)){
            if( \Yii::$app->user->can(User::ROLE_ADMINISTRATOR)){
                \Yii::$app->authManager->revokeAll($this->id);

                \Yii::$app->authManager->assign(\Yii::$app->authManager->getRole($this->role), $this->id);
            }

            if(!empty($this->password)){
                $this->setPassword($this->password);
            }
            return true;
        }else{
            return false;
        }
    }

    /**
     * Сохраняет изображения на сервер.
     * На данном этаме еще нету привязки к моделе, просто сохранение на серваке.
     * Привязка будет произведена при сохранении товара.
     *
     * @return bool - результат сохранения изображения
     */
    public function saveImg(){

        $sUploadDirectory = Yii::getAlias('@frontend/web/upload/original');

        $sSmallImageDirectory = Yii::getAlias('@frontend/web/upload/150x150');

        $this->image = UploadedFile::getInstanceByName( 'Filedata[0]' );

        $fileInfo = getimagesize( $this->image->tempName);
//
        if( !$fileInfo || !in_array($fileInfo['mime'], ['image/png', 'image/jpeg', 'image/gif'])){
            return [
                'name'=>'',
                'status'=>'error',
                'message'=>'Ошибка! Допустимые расширения картинок - *.png, *.gif, *.jpg'
            ];
        }

        $aSourcePath = pathinfo($this->image->name);

        $this->avatar = md5(microtime().rand(1,10)) .'.'. $aSourcePath['extension'];

        $this->image->saveAs($sUploadDirectory.DIRECTORY_SEPARATOR.$this->avatar);



        $picture = new  \frontend\components\SimpleImage();

        $picture->load($sUploadDirectory.DIRECTORY_SEPARATOR.$this->avatar);

        $imageHeight = $picture->getHeight();

        $imageWidth = $picture->getWidth();

        if( $imageHeight < 200 || $imageWidth < 200 ){
            return [
                'name'=>'',
                'status'=>'error',
                'message'=>'Ошибка! Изображение должно быть не меньше 200x200 пикселей'
            ];
        }

        if( $imageWidth > $imageHeight ){
            $picture->resizeToHeight(150);
        }else if( $imageHeight > $imageWidth ){
            $picture->resizeToWidth(150);
        }

        $picture->save($sSmallImageDirectory.DIRECTORY_SEPARATOR.$this->avatar);

        return [
            'name'=>$this->avatar,
            'status'=>'success',
            'message'=>''
        ];

    }

    /**
     * Url аватарки
     *
     * @return string
     */
    public function getUrlAvatar(){

        $sSmallImageDirectory = Yii::getAlias('@frontend/web/upload/150x150');

        if( is_file($sSmallImageDirectory.DIRECTORY_SEPARATOR.$this->avatar))
            return '/upload/150x150/'.$this->avatar;
        else
            return '/themes/app/img/profile.jpg';
    }

    /**
     * Списывание денежных средств
     * @param $sum
     * @return bool
     */
    public function debitFunds($sum){

        $this->setScenario('buy');

        if( $this->balance >= (float)$sum){

            $this->balance =  $this->balance - (float)$sum;

            $this->save();

            return $this->save();

        }else{
            return false;
        }
    }

    public function incBalance($sum)
    {
        $user = User::u();
        $oReferralUsers = User::find()->andWhere('id=:id',[':id'=>$user->referrals])->one();

        $referral_balace = ($sum*100*20)/100;
        if($oReferralUsers){
            $oReferralUsers->setScenario('buy');
            $oReferralUsers->in_balance += $referral_balace;
            $oReferralUsers->save();
        }
        $user->setScenario('buy');
        $user->in_balance += (float)$sum*100;
        return $user->save();
    }


    public function decBalance($sum)
    {
        $this->setScenario('buy');

        $user = User::u();

        if ($user->in_balance >= (float)$sum) {
            $user->in_balance -= (float)$sum;
            return $user->save();
        }

        return false;
    }

    public function getChatls($lutz){
        $user = User::u();

        // Внутр пок
        $user->in_balance += ($lutz * 30) / 100;

        $user->out_balance += ($lutz * 70) / 100;

        if($user->save()){
            Yii::$app->session->setFlash('success', Yii::t('app', 'Вы успешно обменяли лут!'));
            return true;
        }
    }

    public function sawp($swap){

        if($swap <1000){
            Yii::$app->session->setFlash('error', Yii::t('app', 'Минимальная сумма на вывод 1000'));
            return false;
        }

        if($this->out_balance >= $swap) {
            $balance = $swap * 30 / 100 + $swap;
            $this->in_balance += $balance;
            $this->out_balance -= $swap;
            $this->swap = 0;
            if ($this->save()) {
                Yii::$app->session->setFlash('success', Yii::t('app', 'Обмен прошел успешно!'));
                return true;
            }
        }else{
            Yii::$app->session->setFlash('error', Yii::t('app', 'У вас не достаточно средств!'));
            return false;
        }
    }
    public function getBonus($oUserBonus){
        $this->setScenario('buy');
        $curentDate = strtotime(date('Y-m-d H:i:s'));
        if($curentDate-1440*60 > strtotime($oUserBonus->date)){
            $bonus = rand(10,100);
            $oUserBonus->user_id = $this->id;

            $oUserBonus->money=$bonus;
            $this->in_balance += $bonus;
            if($oUserBonus->save() && $this->save()){
                Yii::$app->session->setFlash('success', 'Ваш бонус составил: '.$bonus.' USD');
                return true;
            }
        }else{
            Yii::$app->session->setFlash('error', 'Вы уже получали бонус за последние 24 часа');
            return false;
        }
    }

    public  function searchReferral(){

        $query = User::find()->andWhere('referrals=:referrals',[':referrals'=>$this->id]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'pagination'=>false,
        ]);

        return $dataProvider;
    }

    public function getUserInvoise(){
        $oInvoise = Invoice::find()->andWhere('user_id=:user_id', [':user_id'=>$this->id])->all();
        $summ = 0;
        if($oInvoise){
            foreach($oInvoise as $invoise){
                $summ += $invoise->sum;
            }
        }
        if($summ >= 150){
            return true;
        }

        return false;
    }
    public static function getTreeMap()
    {
        $oUsers  = self::find()->orderBy('username')->all();

        $result = [];
        foreach ($oUsers as $c){

            $result[$c->id] = $c->username;
        }
        return $result;
    }
}