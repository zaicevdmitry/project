<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = \Yii::t('app','Пополнение баланса Яндекс Деньги');
?>

<section class="yandexMoney-pay">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>
            <?php $form = ActiveForm::begin(['options' => [
                'class' => 'form-horizontal',
            ]]); ?>

            <table width="750" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <?= $form->field($model, 'sum')->textInput(['type' => "number"]) ?>
<!--                        <a class="btn" href="--><?//= $auth_url?><!--">Пополнить</a>-->
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="form-group">
                            <?= Html::submitButton(Yii::t('app', 'Пополнить'), ['class' => 'btn btn-success']) ?>
                        </div>
                    </td>
                </tr>
            </table>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</section>