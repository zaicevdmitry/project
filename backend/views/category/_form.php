<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\imperavi\Widget as Editor;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
?>


<div class="pages-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype'=>'multipart/form-data']]);?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => 255]) ?>
    <?= $form->field($model, 'is_main')->checkbox() ?>



    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Создать') : Yii::t('app', 'Обновить'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
