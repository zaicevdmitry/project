<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var common\models\Flower $model
 */

$this->title = Yii::t('app', 'Редактирование {modelClass}: ', [
  'modelClass' => 'растения ',
]) . $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Растения'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редактирование');
?>
<div class="ticket-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
