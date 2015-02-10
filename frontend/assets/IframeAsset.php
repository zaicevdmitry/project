<?php

namespace frontend\assets;

use yii\web\AssetBundle;

class IframeAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web/themes/app';
    public $css= [
        'css/style.css',
        'css/iframe-style.css',
      ];
    public $js = [
//        'js/totalScript.js',
        'js/iframe-app.js',

      ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'frontend\assets\FancyBoxAsset',
      ];
}