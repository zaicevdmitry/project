<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-backend',
    'language' =>'ru',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'content' => [
            'class' => 'backend\modules\pages\Pages',
        ],
    ],
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules'=>[
                '/' => 'site/index',
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
            ]
        ],

        'request' => [
            'cookieValidationKey' => 'qweqwekspods'
        ],


        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

//        'urlManager' => [
//            'enablePrettyUrl' => true,
//            'showScriptName' => false,
//            'rules'=>[
//                '/' => 'site/index',
//                '<controller:\w+>/<action:\w+>/'=>'<controller>/<action>',
//            ]
//        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
        ],

    ],
    'params' => $params,
];
