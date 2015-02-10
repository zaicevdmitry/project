<?php

use common\models\User;
use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Пользователи';
?>
<div class="user-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p style="color: green;">
        <?= Yii::$app->session->getFlash('messageSent'); ?>
    </p>

    <?=
    GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            'id',
            'username',
            'email:email',
            'created_at',
            [
                'class' => 'yii\grid\ActionColumn',
                'template'=>'{update} {delete}',
            ],
        ],
    ]); ?>
</div>