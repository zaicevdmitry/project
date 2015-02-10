<?php
/**
 * Created by PhpStorm.
 * User: papvan
 * Date: 17.10.14
 * Time: 14:10
 */
use common\models\Ticket;
use common\models\User;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\Url;

$this->title = \Yii::t('app','Создание тикета');
?>
<style>
    label {
        color: #000;
    }
</style>
<section class="yandexMoney-pay">
    <div class="accoundContent" ng-app="profileApp">
        <div id="accountDetails" class="container">
            <h1><?= Html::encode(\Yii::t('app',$this->title)) ?></h1>
            <a href="<?= Url::to('/webmoney/tickets') ?>">Все тикеты</a>
            <div class="ticket-form">

                <?php $form = ActiveForm::begin(['options' => [
                    'class' => 'form-horizontal',
                ]]); ?>

                <?= $form->field($model, 'title')->textInput(['maxlength' => 255]) ?>

                <?= $form->field($model, 'message')->textarea(['rows' => 6]) ?>

                <div class="form-group">
                    <?= Html::submitButton(Yii::t('app', 'Создать тикет'), ['class' => 'btn btn-success']) ?>
                </div>

                <?php ActiveForm::end(); ?>
<br/>

                <?= GridView::widget([
                    'dataProvider' => $dataProvider,
                    'layout'=>'{items}',
                    'columns' => [
                        ['class' => 'yii\grid\SerialColumn'],
                        'title',
                        'message:ntext',
                        [
                            'attribute'=>'created_at',
                            'value'=>function($data){
                                return date('d.m.Y', $data->created_at);
                            }
                        ],
                        [
                            'attribute'=>'user_id',
                            'value'=>function($data){
                                $user = User::findOne(['id'=>$data->user_id]);
                                return $user->username;
                            }
                        ],
                        [
                            'attribute'=>'status',
                            'value'=>function($data){
                                return $data->status == Ticket::STATUS_OK ? 'Подтвержден' : 'Новый';
                            }
                        ],

                        ['class' => 'yii\grid\ActionColumn'],
                    ],
                ]); ?>
            </div>
        </div>
    </div>
</section>