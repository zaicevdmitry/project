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

    <div class="wrap">
        <?= $content ?>
    </div>

    <footer>
        <div class="container fixed-bottom">
            <div id="intro_page_footer" class="row">
                <div class="col-sm-12 text-center">
                    <div id="intro_footer_copy">
                        <p>Myres &copy; <?= date('Y'); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
