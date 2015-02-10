<?php
use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;

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
        <?php
            NavBar::begin([
                'brandUrl' => Yii::$app->homeUrl,
                'innerContainerOptions'=>['class'=>'container-fluid'],
                'options' => [
                    'class' => 'navbar-inverse navbar-fixed-top',
                ],
            ]);
            $menuItems = [
                ['label' => 'Главная', 'url' => ['/site/index'], 'visible'=> !Yii::$app->user->isGuest],
                ['label' => \Yii::t('app', 'Категории'), 'url' => ['/category/index'], 'visible'=> !Yii::$app->user->isGuest],
                ['label' => \Yii::t('app', 'Растения'), 'url' => ['/flower/index'], 'visible'=> !Yii::$app->user->isGuest],
                ['label' => \Yii::t('app', 'Пользователи'), 'url' => ['/user/index'], 'visible'=> !Yii::$app->user->isGuest],

            ];
            if (Yii::$app->user->isGuest) {
                $menuItems[] = ['label' => 'Войти', 'url' => ['/site/login']];
            } else {
                $menuItems[] = [
                    'label' => 'Выйти (' . Yii::$app->user->identity->username . ')',
                    'url' => ['/site/logout'],
                    'linkOptions' => ['data-method' => 'post']
                ];
            }

        echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => $menuItems,
                'encodeLabels' => false,

        ]);
            NavBar::end();
        ?>
        <div class="container-fluid" style="margin-top: 60px">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>

        <?= $content ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container-fluid">
        <p class="center">&copy; <a href="#">IT-SoftCompany.COM</a> <?= date('Y') ?></p>
        </div>
    </footer>

    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
