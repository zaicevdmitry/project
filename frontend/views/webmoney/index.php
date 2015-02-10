<?php
use yii\helpers\Html;

$this->title = \Yii::t('app','Пополнение баланса WebMoney');
?>

<section class="yandexMoney-pay">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>
            <div class="bgmainb2" id="scrollheight">
                <h1>Пополнение баланса</h1>
                <img src="../images/webmoney.png" width="218" height="59"><br><br>
                Переведите вручную <?= Yii::$app->params['pay']['default_amount'] ?> руб на WebMoney кошелек <b><?= Yii::$app->params['webMoney']['wallet'] ?></b> <br>
                <a href="https://mini.webmoney.ru" target="_blank">Перейти на сайт для оплаты</a><br>
                В примечании напишите: <b>Payment #25584, parasok</b><br> <br>
                Вы так же можете пополнить баланс вашего аккаунта через любой терминал в вашем городе! Для этого следует записать кошелек выше, в терминале выбрать: Оплата WebMoney, и ввести кошелек. После чего - <font color="red">ОБЯЗАТЕЛЬНО</font> взять чек, и сохранить его. После этого - когда будете дома - <a href="/support/?ac=new">откройте тикет</a> с темой  <br>
                <b>Пополнение баланса #25584, через webmoney</b> и покажите чек оплаты. Если нет возможности сфотографировать чек - перепишите все данные чека, и передайте их нам.
                <font color="#ff0000">Пополнение может занять до 3-х суток, но обычно гораздо быстрее, зависит когда Администрация онлайн! Обычно всё происходит в течении дня.</font><br><br>
                <b style="color: #ff0000">Внимание! Копируйте кошелек с сайта! Внимательно переписывайте кошелек, когда пополняете с терминала! Терминалы не возвращают средства, если был введен ошибочный кошелек. За перевод на неправильный номер, баланс не пополняется!</b><br>				</div>
        </div>
    </div>
</section>