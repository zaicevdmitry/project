<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use backend\assets\LoginAsset;
LoginAsset::register($this);

/**
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var \common\models\LoginForm $model
 */
$this->title = 'Авторизация';

?>
<div class="site-login">
    <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>
    <div id="login" >
        <h1 id="ff-proof" class="ribbon">Войти &nbsp;&nbsp;</h1>
        <fieldset id="inputs">
            <?= $form->field($model, 'email')->textInput(['placeholder' => 'E-mail']) ?>
            <?= $form->field($model, 'password')->passwordInput(['placeholder' => \Yii::t('app','Пароль')]) ?>
            <?= $form->field($model, 'rememberMe')->checkbox() ?>
        </fieldset>
        <fieldset id="actions">
            <p class="option"><?= Html::submitButton('Войти', ['id' => 'submit', 'name' => 'login-button']) ?></p>
        </fieldset>
    </div>
    <?php ActiveForm::end(); ?>
</div>
