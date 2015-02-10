<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Pages */

$this->title = Yii::t('app', 'Обновить {modelClass}: ', [
        'modelClass' => 'станцию',
    ]) . ' ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Станции'), 'url' => ['index']];
$this->params['breadcrumbs'][] = Yii::t('app', 'Обновить');
?>
<div class="pages-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
