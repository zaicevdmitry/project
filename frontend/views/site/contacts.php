<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 01.10.2014
 * Time: 15:21
 */
use yii\helpers\Html;

$this->title = 'Контакты';
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>
    <p>По вопросам, связанным с технической поддержкой (проблемы, ошибки), можете сообщить через&nbsp; форму обратной связи расположенную ниже. Если у вас есть вопросы по несправедливой, по вашему мнению, блокировке, ознакомьтесь еще раз с <a href="#" target="_blank">правилами проекта</a>.</p><p>Приблизительное время ответа технической поддержки &ndash; 24 часа. Тем не менее, мы всегда стараемся ответить как можно быстрее. Наша техническая поддержка работает с 12:00 до 20:00 в будние дни.</p>		<br />
    <form method='post' name='formname' style="margin: 0px 0px 20px 105px;">
        <table width="733" border="0" cellspacing="5" cellpadding="5">
            <tr>
                <td align="right" width="450">Контактное лицо:</td>
                <td align="left"><input name="imko" value="" type="text" size="25" maxlength="50" class="b_textbox" /></td>
            </tr>
            <tr>
                <td align="right" width="450">Почта для связи:</td>
                <td align="left"><input name="posta" value="" type="text" size="25" maxlength="50" class="b_textbox" /></td>
            </tr>
            <tr>
                <td colspan="2" align="right" style="padding-right: 72px;">
                    <textarea rows="8" cols="75" name="tikstik"></textarea>
                </td>
            </tr>
            <tr>
                <td align="right" width="450">Cимволы на картинке:<br /><small>(если картинка плохо различима, то кликни по ней для замены)</small></td>
                <td align="left"><input name="captcha" type="text" size="25" maxlength="50" class="b_textbox" /></td>
            </tr>
            <tr>
                <td align="right" width="450"><img src="/themes/app/img/captcha.png" border="0" style="margin: 0; cursor: pointer;" width="165" height="60" onClick="" /></td>
                <td align="center"><input type="submit" value="Отправить" style="height: 30px;"></td>
            </tr>
        </table>
    </form>
    <br />
    <div style="clear:both;"></div>
</div>
