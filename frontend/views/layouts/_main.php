<?php
use yii\helpers\Html;

use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use frontend\widgets\Alert;
use frontend\widgets\Lang;

/**
 * @var \yii\web\View $this
 * @var string $content
 */
AppAsset::register($this);
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
    <?php $this->beginBody() ?>
    <div class="wrapper">

    <?php if(!Yii::$app->user->isGuest):?>

        <?=$this->render('//partials/_menu'); ?>

    <?php endif;?>
        <div class="clear"></div>
    <div class="content">
        <?= $content ?>
        <div class="clear"></div>

    </div>
    <?php $this->endBody() ?>
<div class="clear"></div>
</div>
</body>
</html>
<?php $this->endPage() ?>