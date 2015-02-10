<?php
use yii\helpers\Html;
?>
<div style="right:15px; background-color: #595959; border-radius: 5px; color: #fff; padding: 10px; text-align: center; position: fixed">
<?php foreach ($langs as $lang):?>
    <a <?php if($current->id == $lang->id) echo 'class="current"';?> href="/<?= $lang->url.Yii::$app->getRequest()->getUrl() ?>">
        <img src="/img/flag/<?= $lang->url ?>.jpg" alt=""/>
    </a>
<?php endforeach;?>
<br>
<br>
Текущий язык: <?=  $current->name?>
</div>
