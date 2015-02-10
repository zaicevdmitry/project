<?php

namespace frontend\assets;

use yii\web\AssetBundle;

class FancyBoxAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web/library/fancybox';
    public $css= [
        'jquery.fancybox.css',
      ];
    public $js = [
        'jquery.fancybox.js'
      ];
    public $depends = [
        'yii\web\JqueryAsset',
      ];
}