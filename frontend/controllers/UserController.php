<?php
namespace frontend\controllers;

use common\models\LoginForm;
use common\models\User;
use common\models\UserStation;
use yii\filters\AccessControl;
use Yii;
use yii\helpers\Url;

/**
 * User controller
 */
class UserController extends BaseController
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'set-email', 'buy-pro','reset-password', 'request-password-reset', 'referral', 'signup','captcha'],
                'rules' => [
                    [
                        'actions' => ['signup', 'request-password-reset', 'reset-password', 'referral','captcha'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout', 'set-email', 'buy-pro','reset-password', 'request-password-reset', 'referral'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Авторизация
     * @return string|\yii\web\Response
     */
    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }
        $this->layout= '/login';
        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Регистрация
     * @return string|\yii\web\Response
     */
    public function actionSignup()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }
        $oUserStation = new UserStation();
        $oModel = new User();
        $this->layout= '/login';

        $user_referral = Yii::$app->session['id'];

        $oModel->setScenario('signup');
        if ( $oModel->load($_POST) && $oModel->signup() ) {

            if (Yii::$app->getUser()->login($oModel)){

                if($user_referral){
                    $oModel->setScenario('referrals');
                    $oModel->referrals = $user_referral;
                    $oModel->save();
                }

                $oUserStation->user_id = $oModel::u()->id;
                $oUserStation->stantion_id = 1;
                $oUserStation->count_stations_purchased = 1;
                $oUserStation->save();

                return $this->redirect(['page/index']);
            }
        }
        return $this->render('signup', compact('oModel'));
    }
    public function actionReferral($id){
        Yii::$app->session['id'] = $id;
        $this->redirect('signup');
    }

    /**
     * Выход
     * @return \yii\web\Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }



    /**
     * Восстановление пароля
     * @return string|\yii\web\Response
     */
    public function actionRequestPasswordReset()
    {
        $model = new User();
        $model->setScenario('requestPasswordResetToken');

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendResetPasswordRequestEmail()) {
                Yii::$app->getSession()->setFlash('success', \Yii::t('app','Проверьте свою электронную почту для получения дальнейших инструкций.'));

                return $this->goHome();
            } else {
                Yii::$app->getSession()->setFlash('error', \Yii::t('app','К сожалению, вы не можете сбросить пароль для данной электронной почты.'));
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Сброс пароля
     * @param $token
     *
     * @return string|\yii\web\Response
     * @throws \yii\web\BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        $model = User::find('password_reset_token =: password_reset_token', array(':password_reset_token'=>$token));

        $model->setScenario('resetPassword');

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if( $model->save() ){
                Yii::$app->getSession()->setFlash('success', \Yii::t('app','Пароль успешно сохранен'));

                return $this->goHome();
            }else
                Yii::$app->getSession()->setFlash('error', \Yii::t('app','Не удалось сохранить пароль.'));
        }


        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    public function actionChangePassword()
    {
        $model =  User::u();
        $model->setScenario('changePassword');

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            $data = Yii::$app->request->post('User');
            if ($model->validatePassword($data['oldPassword'])){
                if ($data['password'] === $data['passwordRepeat']){
                    $model->password = $data['password'];
                    $model->setPassword($data['password']);
                    if ($model->save()){
                        Yii::$app->session->setFlash('success', \Yii::t('app','Пароль изменен.'));
                        return $this->render('change_password', ['model' => $model]);
                    } else {
                        Yii::$app->session->setFlash('error', \Yii::t('app','Ошибка! Обратитесь к администратору.'));
                    }
                } else {

                    Yii::$app->session->setFlash('error', \Yii::t('app','Палоли не совпадают.'));
                }
            } else {
                Yii::$app->session->setFlash('error', \Yii::t('app','Старый пароль введен не верно.'));
            }
        }
        return $this->render('change_password', [
            'model' => $model,
        ]);
    }
}