<?php
use frontend\models\Payeer;
use yii\helpers\Html;

$this->title = \Yii::t('app','Пополнение баланса Яндекс Деньги');
?>

<section class="invoice">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>

            <p>Ввод средств позволяет приобрести USD с помощью различных платежных систем: Yandex Деньги, банковских карт, SMS, терминалов и т.д. Оплата и зачисление USD на баланс производится в автоматическом режиме.</p>
            <!--            <div style="clear:both; margin-top: 8px; margin-bottom: 14px; text-align: center;">Курс игровой валюты: <b>1 Руб. = 100 USD</b></div>-->
            <table width="750" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td valign="top" colspan="2" height="134">
                        <form action="https://money.yandex.ru/quickpay/confirm.xml" method="POST">

                            <input type="hidden" name="receiver" value="<?=\Yii::$app->params['yandexMoney']['wallet']?>">
                            <input type="hidden" name="formcomment" value="Lecfactory: Пополнение баланса">
                            <input type="hidden" name="short-dest" value="Lecfactory: Пополнение баланса">
                            <input type="hidden" name="writable-targets" value="false">
                            <input type="hidden" name="comment-needed" value="false">
                            <input type="hidden" name="label" value="<?php echo $orderId; ?>">
                            <input type="hidden" name="quickpay-form" value="donate">
                            <input type="hidden" name="targets" value="Пополнение #<?php echo $orderId; ?>">
                            <input type="hidden" name="sum" value="<?php echo \Yii::$app->params['pay']['default_amount'] + (\Yii::$app->params['pay']['default_amount']/100*0.5)?>" data-type="number" >
                            <input type="hidden" name="comment" value="Пополнение баланса на сумму <?=\Yii::$app->params['pay']['default_amount']?> руб." >
                            <input type="hidden" name="fio" value="0">
                            <input type="hidden" name="mail" value="0" >
                            <input type="hidden" name="phone" value="0">
                            <input type="hidden" name="address" value="0">

                            <input type="submit" name="submit-button" value="Пополнить баланс" style="height: 30px; margin-top: 10px;" />
                        </form>
                    </td>
                </tr>
            </table>
            <script language="javascript">GetSumIns();</script>

        </div>
    </div>