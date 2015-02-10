<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/**
 * @var yii\web\View $this
 * @var common\models\Flower $model
 */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Растения'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ticket-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Редактировать'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Удалить'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Вы действительно хотите удалить'.$model->name.'?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <div class="img" style="float: left">
        <?php if($model->photo_url==NULL){
            echo Html::img('http://placehold.it/400x400');
        }else{
            echo Html::img('/uploads/theme/original/'.$model->photo_url, ['width'=>'400px']);
        }?>
    </div>
    <div style="width: 1400px; float: left; margin-left: 50px">
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'name',
            [
                'label' => 'Категория',
                'value' => $model->category->name,
            ],
            'description'
        ]
    ]) ?>
    </div>

</div>
