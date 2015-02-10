<img src="/img/bg.png" class="taran-bg" width="100%;" style="position: absolute; left: 0; top: 0" />
<div class="wrapper">
<?php if(Yii::$app->user->isGuest):?>
    <div class="auth">
        <a type="submit"  href="<?= \yii\helpers\Url::to(['user/login']) ?>">Войти</a>
        <a type="submit"  href="<?= \yii\helpers\Url::to(['user/signup']) ?>">Регистрация</a>
    </div>
<?php endif;?>

<?php if(!Yii::$app->user->isGuest):?>
    <div class="stata">
        <div class="wrapper-stata">
            Баланс: <span style="font-weight: bold">100</span> для покупок
        </div>

        <div class="wrapper-stata">
            Количество нефти: <span style="font-weight: bold">100</span> на вывод
        </div>
    </div>
<?php endif;?>

    <div class="logo" style="position: absolute;
right: -49px;
top: 72px;
font-size: 60px;
color: #fff;
font-weight: bold;"><img src="/img/logo.png" alt=""/></div>

    <div class="desc">
        <!--Экономическая игра с выводом денег <br/><br/>-->
        <!--Yardocion - быстро развивающаяся, уникальная экономическая онлайн игра - Ваш стабильный и надежный доход! Игра подходит как для новичков, так и для опытных игроков.-->
        <!--Yardocion доступна для игры онлайн в любом современном браузере.-->
    </div>
    <div class="auth"></div>
