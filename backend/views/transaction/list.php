<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\Invoice */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Список транзакций');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="themes-index">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Добавить {modelClass}', [
            'modelClass' => 'транзакцию',
        ]), ['create'], ['class' => 'btn btn-success']) ?>
    </p>


    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $model,
        'columns' => [
            [
                'attribute' => 'date',
                'value' => function($value){
                        return date('d.m.Y H:i', $value->date);
                    }
            ],
            [
                'attribute' => 'id',
            ],
            [
                'attribute' => 'type',
                'value' => function($value){
                        if (!is_array(\common\models\Invoice::getType($value->type))) {
                            return \common\models\Invoice::getType($value->type);
                        } else {
                            return '';
                        }
                    }
            ],
            [
                'attribute' => 'description',
            ],
            [
                'attribute' => 'status',
                'value' => function ($value){
                        switch ($value->status) {
                            case \common\models\Invoice::STATUS_ACCEPTED:
                                return Yii::t('app', 'Принят');
                            case \common\models\Invoice::STATUS_SUCCESS:
                                return Yii::t('app', 'Успешно принят');
                            case \common\models\Invoice::STATUS_PENDING:
                                return Yii::t('app', 'В ожидании');
                            case \common\models\Invoice::STATUS_SITEERROR:
                                return Yii::t('app', 'Ошибка на сайте');
                            case \common\models\Invoice::STATUS_FAIL:
                                return Yii::t('app', 'Не оплачено');
                        }
                    }
            ],
            [
                'attribute' => 'sum',
            ],
            [
                'attribute' => 'user',
                'value' => function($value){
                        return $value->user->username;
                    }
            ]
        ],
    ]); ?>
</div>