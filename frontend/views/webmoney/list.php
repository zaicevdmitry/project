<?php
use yii\helpers\Html;
use yii\helpers\Url;
use common\models\Ticket;

$this->title = \Yii::t('app','Список тикетов');
?>

<section class="yandexMoney-pay">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>
            <a href="<?= Url::to('/webmoney/create') ?>">Создать тикет</a>
            <?php if($models): ?>
            <table width="100%" border="1" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <th width="10%">№ тикета</th>
                    <th width="50%">Тема</th>
                    <th width="25%">Время создания</th>
                    <th>Статус</th>
                </tr>
                <?php foreach ($models as $model): ?>
                    <tr>
                        <td><?= $model['id'] ?></td>
                        <td><?= $model['title'] ?></td>
                        <td><?= date('d.m.Y', $model['created_at']) ?></td>
                        <td><?= $model->status==Ticket::STATUS_OK ? 'Подтвержден' : 'Обрабатывается' ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <?php else: ?>
                <p>У Вас нет тикетов.</p>
            <?php endif; ?>
        </div>
    </div>
</section>