<?php
use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var common\models\User $user
 */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl(['user/activate', 'token' => $user->activate_key]);
?>

Для активации аккаунта перейдите по ссылке: <?= Html::a(Html::encode($resetLink), $resetLink) ?>