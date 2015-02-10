<?php
use yii\helpers\Html;
use yii\helpers\Url;

$this->title = \Yii::t('app','Правила пополнения баланса через WebMoney');
?>

<section class="yandexMoney-pay">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>
            <div class="bgmainb2" id="scrollheight">
                <p>Кошелек для перевода: <strong><?= Yii::$app->params['webMoney']['wallet'] ?></strong></p>
                <p>Необходимо выполнить перевод средств на кошелек, указанный выше. Затем создать <a href="<?= Url::to('/webmoney/create') ?>">тикет</a>, в тикете пишите - номер своего кошелька, cумму и время. Иначе, деньги НЕ БУДУТ зачислены!!!</p>
            </div>
        </div>
    </div>
</section>