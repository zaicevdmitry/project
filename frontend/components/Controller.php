<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.08.14
 * Time: 14:22
 */

namespace frontend\components;

class Controller extends \yii\web\Controller{

    public $enableCsrfValidation = false;

    public function init(){
        parent::init();
    }
}