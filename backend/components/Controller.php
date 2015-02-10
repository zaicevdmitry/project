<?php

namespace backend\components;

use common\models\User;
use yii\filters\AccessControl;

class Controller extends \yii\web\Controller{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => [User::ROLE_ADMINISTRATOR],
                    ],
                ],
            ],
        ];
    }
}