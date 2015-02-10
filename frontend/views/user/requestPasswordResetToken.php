<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var \frontend\models\PasswordResetRequestForm $model
 */
$this->title = 'Восстановление пароля';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-request-password-reset" style="text-align: center; width: 500px; margin: 0 auto;">
    <h1><?= Html::encode($this->title) ?></h1>

    <p><?=\Yii::t('app', 'Пожалуйста, заполните электронную почту.Ссылка для сброса пароля будет отправлена ​​вам.')?></p>

    <?= \frontend\widgets\Alert::widget(); ?>

            <?php $form = ActiveForm::begin(['id' => 'request-password-reset-form']); ?>
                <?= $form->field($model, 'email') ?>
                <div class="form-group">
                    <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary']) ?>
                </div>
            <?php ActiveForm::end(); ?>
</div>
