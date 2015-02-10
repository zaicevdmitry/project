<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 01.10.2014
 * Time: 15:32
 */
use frontend\widgets\Alert;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = 'Смена пароля';
?>
<style>
    .control-label{
        color: #000000 !important;
        margin-left: 5px;
        padding-top: 10px;
    }
</style>
<div class="site-about">
    <p style="padding: 20px"> Пароль должен состоять из 6-20 символов, допустимы только англ. символы.<br /></p>
    <?= Alert::widget();?>
    <div  style="width: 400px; margin-left: auto; margin-right: auto">
        <?php $form = ActiveForm::begin(['id' => 'change-form']); ?>
        <div>
            <?= $form->field($model, 'oldPassword')->passwordInput(['class'=>'form-input-pass'])?>
        </div>
        <div >
            <?= $form->field($model, 'password')->passwordInput(['class'=>'form-input-pass'])?>
        </div>
        <div >
            <?= $form->field($model, 'passwordRepeat')->passwordInput(['class'=>'form-input-pass'])?>
        </div>
        <div class="center" style="margin-left: 90px">
            <?= Html::submitButton(\Yii::t('app','Изменить пароль'), ['class' => 'btn btn-primary btn-lg'])?>
        </div>
        <?php ActiveForm::end(); ?>
        <br />
    </div>
</div>