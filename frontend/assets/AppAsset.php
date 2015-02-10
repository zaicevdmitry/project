<?php

namespace frontend\assets;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css= [
//        'css/bootstrap.min.css',
        'css/style.css',
      ];
    public $js = [
        'js/swap.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
//        'yii\bootstrap\BootstrapAsset',
//        'yii\bootstrap\BootstrapPluginAsset',
//        'frontend\assets\FancyBoxAsset',
//        'frontend\assets\PnotifyAsset'
      ];
}