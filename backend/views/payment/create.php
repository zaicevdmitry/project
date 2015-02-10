<?php

use yii\bootstrap\ActiveForm;
use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\DictionaryCompany */

$this->title = Yii::t('app', 'Добавить выплату');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Выплаты'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="transaction-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php $form = ActiveForm::begin(['options' => ['enctype'=>'multipart/form-data']]);?>

    <?= $form->field($model, 'user_id')->dropDownList($oUsers, ['style'=>'width: 290px;']) ?>
    <?= $form->field($model, 'status')->checkbox()?>
    <?= $form->field($model, 'purse')->textInput(['maxlength' => 255, 'style'=>'width: 290px;']) ?>
    <?= $form->field($model, 'sum')->textInput(['maxlength' => 255, 'style'=>'width: 290px;']) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Добавить'),['class' =>'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>


</div>
