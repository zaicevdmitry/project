<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Flower */

$this->title = Yii::t('app', 'Добавить {modelClass}', [
    'modelClass' => 'растение',
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Растения'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
