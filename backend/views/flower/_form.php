<?php

use kartik\select2\Select2;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\imperavi\Widget as Editor;
use kartik\icons\Icon;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */

$addon = [
    'prepend' => [
        'content' => Icon::show('th-list', ['class'=>'fa-2x'], Icon::BSG),
    ],
];
?>

<div class="pages-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype'=>'multipart/form-data']]);?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => 255]) ?>

    <label class="control-label" for="flower-name">Категория</label>

    <?= Select2::widget([
        'name' => 'dropdown',
        'model' => $model,
        'attribute' => 'category_id',
        'data' => \common\models\Category::getTreeMap(),
        'size'=>Select2::LARGE,
        'addon' => $addon,
        'options' => ['placeholder' => 'Выберите категорию ...', 'multiple'=>true],
        'pluginOptions' => [
            'allowClear' => true
        ],
    ])?>

    <br/>

    <?php if($model->photo_url){
        echo Html::img('/uploads/theme/original/'.$model->photo_url, ['width'=>'400px']);
    }?>

    <?= $form->field($model, 'photo_url')->fileInput()?>

    <?= Html::activeLabel($model, 'description') ?>

    <?=
    Editor::widget([
        'model' => $model,
        'attribute' => 'description',

        'options' => [
            'toolbar' => true,
            'minHeight' => 200,
        ],
        'plugins' => [
        ]
    ]);
    ?>

    <div class="form-group" style="margin-top: 20px">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Создать') : Yii::t('app', 'Обновить'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
