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
    <?=$this->render('//partials/_menu'); ?>
    <?php if(!Yii::$app->user->isGuest):?>

    <?php endif;?>
    <div class="content">
        <?= $content ?>
    </div>
    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>