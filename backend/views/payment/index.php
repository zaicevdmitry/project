<?php
/**
 * Created by PhpStorm.
 * User: Dima
 * Date: 06.11.2014
 * Time: 15:09
 */
use yii\grid\GridView;
use yii\helpers\Html;
$this->title = Yii::t('app', 'Список выплат');
$this->params['breadcrumbs'][] = $this->title;
?>
    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?= Html::a(Yii::t('app', 'Создать {modelClass}', [
            'modelClass' => 'выплату',
        ]), ['create'], ['class' => 'btn btn-success']) ?>
    </p>


<?= GridView::widget([
    'dataProvider' => $dataProvider,
    'columns' => [
        [
            'attribute' => 'user_id',
            'value' => function($value){
                return $value->user->username;
            }
        ],
        [
            'label' => 'Баланс',
            'attribute' => 'user_id',
            'value' => function($value){
                return $value->user->out_balance;
            }
        ],
        [
            'attribute' =>  'sum',
            'value' => function($value){
                return   $value->sum;
            }
        ],
        [
            'attribute' =>  'purse',
            'value' => function($value){
                return   $value->purse;
            }
        ],
        [
            'attribute' =>  'created_at',
        ],
        [
            'attribute' =>  'status',
            'value' => function($value){
                return   ($value->status)? 'Да':'Нет';
            }
        ],
        [
            'class' => 'yii\grid\ActionColumn',
            'template' => '{update}'
        ],
    ],
]); ?>