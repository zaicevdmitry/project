<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Pages */

$this->title = Yii::t('app', 'Обновить {modelClass}: ', [
        'modelClass' => 'статус выплаты пользователя',
    ]) . ' ' . $model->user->username;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Выплаты'), 'url' => ['index']];
$this->params['breadcrumbs'][] = Yii::t('app', 'Обновить');
?>
<div class="pages-update">

    <h3><?= Html::encode($this->title) ?></h3>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
