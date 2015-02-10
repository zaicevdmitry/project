<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\imperavi\Widget as Editor;

/* @var $this yii\web\View */
/* @var $model common\models\Pages */
/* @var $form yii\widgets\ActiveForm */
?>


<div class="pages-form">

    <?php $form = ActiveForm::begin();?>


    <div class="padding">Пользователь: <?=$model->user->username?></div>
    <div class="padding">Баланс пользователя: <?=$model->user->in_balance?></div>
    <div class="padding"> Кошелек: <?=$model->purse?></div>
    <div class="padding">Сумма: <?=$model->sum?></div>

    <div class="padding"><?= $form->field($model, 'status')->checkbox() ?></div>

    <div class="form-group">

        <?= Html::submitButton( Yii::t('app', 'Обновить'), ['class' =>  'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
