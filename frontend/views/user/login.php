<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var \common\models\LoginForm $model
 */
$this->title = \Yii::t('app','Вход');
?>
<section class="intro">
    <div class="introContent">
        <div id="holder" class="container">
            <div id="intro_form" class="row">
                <div class="col-xs-2 col-sm-2 col-md-5 col-lg-7"></div>

                <div id="form_login" class="col-xs-10 col-sm-10 col-md-7 col-lg-5 form_register">
                    <h4><?=\Yii::t('app','Войти')?></h4>

                    <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>
                    <div id="input_email" class="col-md-12">
                        <?= $form->field($model, 'email')->textInput(['placeholder' => 'E-mail']) ?>
                    </div>
                    <div id="input_password" class="col-md-12" style=" height: 90px;">
                        <?= $form->field($model, 'password')->passwordInput(['placeholder' => \Yii::t('app','Пароль')]) ?>
                        <?= $form->field($model, 'rememberMe')->checkbox( );  \Yii::t('app','Утеряли доступы?')?>
                        <div class ="dos" style="color:#999; float: right; height: 40px; display: inline; margin-top: -35px;">
                            <?=\Yii::t('app','Утеряли доступы?')?> <?= Html::a(\Yii::t('app', 'Восстановить!'), ['user/request-password-reset'], array('style'=>'color:#fff')) ?>
                        </div>
                    </div>

                    <div id="form_register_btn" class="text-center">
                        <?= Html::submitButton(\Yii::t('app','Войти'), ['class' => 'btn btn-primary btn-lg', 'name' => 'login-button']) ?>
                    </div>
                    <?php ActiveForm::end(); ?>


                    <div class="clearfix"></div>
<!--                    <div class="sign-in-bar">-->
<!--                        <p>--><?//=\Yii::t('app','Нет аккаунта? ')?><!--<a href="/user/signup"><i class="fa fa-lock"></i>--><?//=\Yii::t('app','РЕГИСТРАЦИЯ')?><!--</a> </p>-->
<!--                    </div>-->
<!--                    <div class="sign-in-terms">-->
<!--                        <p>--><?//=\Yii::t('app','Ваши контактные данные не будут переданы третьим лицам')?><!--</p>-->
<!--                            <p>--><?//=\Yii::t('app','Нажав кнопку "Зарегистрироваться", Вы принимаете наши')?><!-- <a href="#" target="_blank">-->
<!--                                    --><?//=\Yii::t('app','Условия соглашения')?><!--</a> и <a href="#" target="_blank">--><?//=\Yii::t('app','Политику конфиденциальности')?><!--</a></p>-->
<!---->
<!--                    </div>-->
                </div>


            </div><!--end_intro_form-->

        </div>
    </div>
</section>