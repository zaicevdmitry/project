<?php
namespace backend\widgets;
use common\models\DictionaryLanguage;

class Lang extends \yii\bootstrap\Widget
{
    public function init(){}

    public function run() {
        return $this->render('lang/view', [
            'current' => DictionaryLanguage::getCurrent(),
            'langs' => DictionaryLanguage::find()->all(),
        ]);
    }
}