<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\imperavi\Widget as Editor;

/* @var $this yii\web\View */
/* @var $model common\models\Pages */
/* @var $form yii\widgets\ActiveForm */
?>


<div class="pages-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype'=>'multipart/form-data']]);?>

    <?= Html::img('/img/'.$model->img,['width'=>'100px']) ?>
    <?= $form->field($model, 'category') ?>
    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'performance') ?>


    <?= $form->field($model, 'price') ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Создать') : Yii::t('app', 'Обновить'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
