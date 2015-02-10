<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\Station */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Станции');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            [
                'attribute' => 'img',
                'format' => 'html',
                'value' => function ($value) {
                    return Html::img('/img/'.$value->img,['width'=>'100px']);
                }
            ],
            'category',
            'name',
            'performance',
            'price',
            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{update}'
            ],
        ],
    ]); ?>

</div>
