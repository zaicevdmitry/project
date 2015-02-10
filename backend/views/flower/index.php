<?php

use common\models\Link;
use frontend\widgets\Alert;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;

/**
 * @var yii\web\View $this
 * @var yii\data\ActiveDataProvider $dataProvider
 * @var common\models\Flower $searchModel
 */

$this->title = Yii::t('app', 'Растения');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ticket-index">

    <h1><?= Html::encode($this->title) ?></h1>
<!--    <hr>-->
<!--    <h3>Поиск растений</h3>-->
<!--    --><?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    <hr>
    <p>
        <?= Html::a(Yii::t('app', 'Добавить {modelClass}', [
            'modelClass' => 'растение',
        ]), ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= Alert::widget();?>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
//        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute' => 'name',
                'format' => 'html',
                'value' => function ($value) {
                    return Html::a($value->name,[ Url::toRoute(['/flower/view', 'id' => $value->id])]);
                }
            ],
            [
                'attribute' => 'photo_url',
                'format' => 'html',
                'value' => function ($value) {
                    return Html::img('/uploads/theme/original/'.$value->photo_url,['width'=>'200px']);
                }
            ],
            [
                'attribute' => 'category_id',
                'format' => 'html',
                'value' => function ($value) {
                    //TODO - в первую очередь переписать и доработать решение не годится!!!
                    $stack = "";
                    $aCategoryId  = Link::find()->select('category_id')->andWhere('flower_id=:flower_id',[':flower_id'=> $value->id])->all();

                    foreach($aCategoryId as $category){
//                        var_dump($category->category_id->category);
                        $stack .= $category->category_id->category."<br/>";
                    }

                    return $stack;
                }
            ],
            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{update}{delete}'
            ],
        ],
    ]); ?>

</div>
