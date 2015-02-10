<?php

use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var string $name
 * @var string $message
 * @var Exception $exception
 */

$this->title = $name;
?>
<div style="text-align: center; margin-top: 200px">
    <h2><?= Html::encode($this->title) ?></h2>
    <h2><a href="/">На главную</a></h2>
    <p>
        <?= nl2br(Html::encode($message)) ?>
    </p>
</div>
