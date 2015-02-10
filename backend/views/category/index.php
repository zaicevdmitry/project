<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\PagesSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Категрии');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-index">

    <h1><?= Html::encode($this->title) ?></h1>
<!--    <hr>-->
<!--    <h3>Поиск категорий</h3>-->
<!--    --><?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    <hr>
    <p>
        <?= Html::a(Yii::t('app', 'Добавить'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            'name',
            [
//                'label' => 'Баланс',
                'attribute' => 'is_main',
                'value' => function ($value) {
                    return ($value->is_main)? 'Да':'Нет';
                }
            ],
            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{update}{delete}'
            ],
        ],
    ]); ?>

</div>
