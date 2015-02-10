<?php
namespace frontend\models;

use common\models\User;
use Yii;
use yii\base\Model;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $username;
    public $email;
    public $password;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['username', 'filter', 'filter' => 'trim'],
            ['username', 'required'],
            ['username', 'unique', 'targetClass' => '\common\models\User', 'message' => \Yii::t('app', 'Это имя пользователя уже занято.')],
            ['username', 'string', 'min' => 2, 'max' => 255],

            ['email', 'filter', 'filter' => 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'unique', 'targetClass' => '\common\models\User', 'message' => \Yii::t('app', 'Этот адрес электронной почты уже было принят.')],

            ['password', 'required'],
            ['password', 'string', 'min' => 6,  'message' => \Yii::t('app', 'Поле пароль обязательное для заполнения.')],
        ];
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if ($this->validate()) {
            return User::create($this->attributes);
        }

        return null;
    }
}
