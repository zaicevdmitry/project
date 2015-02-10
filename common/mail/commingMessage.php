<?php
use yii\helpers\Html;

/**
 * @var yii\web\View $this
 * @var common\models\User $user
 */

?>

<?=\Yii::t('app','Вам пришло сообщение от')?> <?= $message->name ?> (<?= $message->email ?>)


    <?= $message->text ?>