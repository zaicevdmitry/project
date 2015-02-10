<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;


/**
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var \frontend\models\SignupForm $oModel
 */
$this->title = 'Регистрация';
?>
<section class="intro">
    <div class="introContent">
        <div id="holder" class="container">
            <div id="intro_form" class="row">
                <div class="col-xs-2 col-sm-2 col-md-5 col-lg-7"></div>

                <!--Регистрация-->
                <div id="form_register" class="col-xs-10 col-sm-10 col-md-7 col-lg-5 form_register" style="display: block;">
                    <h4><?=\Yii::t('app','Начни уже сейчас')?></h4>

                    <?php $form = ActiveForm::begin(['id' => 'form-signup']); ?>
                    <div id="input_name" class="col-md-12">
                        <?= $form->field($oModel, 'username')->textInput(array('placeholder' =>  \Yii::t('app','Имя')))  ?>
                    </div>
                    <div id="input_email" class="col-md-12">
                        <?= $form->field($oModel, 'email')->textInput(array('placeholder' => 'E-mail'))  ?>
                    </div>
                    <div id="input_password" class="col-md-12">
                        <?= $form->field($oModel, 'password')->passwordInput(array('placeholder' => \Yii::t('app','Пароль')))  ?>
                    </div>
                    <div id="input_capcha" class="col-md-12">
                        <?= $form->field($oModel, 'captcha')->widget(\yii\captcha\Captcha::className()) ?>
                    </div>
                    <div id="input_capcha" class="col-md-12">
                        <div style="color: #fff; float: left;margin-top: 2px;">С <a href="<?= \yii\helpers\Url::to(['page/rules']) ?>" style="color: #fff">правилами</a>  проекта ознакомлен(а) и принимаю:</div><?= $form->field($oModel, 'check')->checkbox() ?>
                    </div>


                    <div id="form_register_btn" class="text-center">
                        <?= Html::submitButton(\Yii::t('app','Регистрация'), ['class' => 'btn btn-primary btn-lg', 'name' => 'signup-button']) ?>
                    </div>
                    <?php ActiveForm::end(); ?>


                    <div class="clearfix"></div>
<!--                    <div class="sign-in-bar">-->
<!--                        <p>--><?//=\Yii::t('app','Войти с ')?><!--<a href="/user/login"><i class="fa fa-unlock"></i>--><?//=\Yii::t('app','СУЩЕСТВУЮЩИМ АККАУНТОМ')?><!--</a> </p>-->
<!--                    </div>-->
<!--                    <div class="sign-in-terms">-->
<!--                        <p>--><?//=\Yii::t('app','Ваши контактные данные не будут переданы третьим лицам')?><!--</p>-->
<!--                        <p>--><?//=\Yii::t('app','Нажав кнопку "Зарегистрироваться", Вы принимаете наши')?><!-- <a href="#" target="_blank">-->
<!--                                --><?//=\Yii::t('app','Условия соглашения')?><!--</a> и <a href="#" target="_blank">--><?//=\Yii::t('app','Политику конфиденциальности')?><!--</a></p>-->
<!--                    </div>-->
                </div>

            </div><!--end_intro_form-->
        </div>
    </div>
</section>