<div style="position: absolute; left: 0; top: 0">
    <img src="/img/bg.png" class="taran-bg" width="100%;"  />
    <div style="background-image: url('/img/circle.png')"></div>
</div>
<div class="wrapper">
    <?php
    use common\models\Invoice;
    use common\models\User;
    use common\models\UserPayment;

    if(Yii::$app->user->isGuest):?>
        <div class="auth">
            <a type="submit"  href="<?= \yii\helpers\Url::to(['user/login']) ?>">Войти</a>
            <a type="submit"  href="<?= \yii\helpers\Url::to(['user/signup']) ?>">Регистрация</a>
        </div>
    <?php endif;?>


    <div class="stata">
        <?php if(!Yii::$app->user->isGuest):?>
            <div class="wrapper-stata">
                Баланс: <span style="font-weight: bold"><?php echo \Yii::$app->user->identity->in_balance; ?></span> USD для покупок
            </div>

            <div class="wrapper-stata">
                Количество USD: <span style="font-weight: bold"><?php echo \Yii::$app->user->identity->out_balance; ?> ( <?php echo (\Yii::$app->user->identity->out_balance / 100); ?> руб.)</span> на вывод
            </div>
        <?php endif;?>

        <div class="wrapper-stata">
            Пользователей онлайн: <span style="font-weight: bold">
                <?php $new_time =  strtotime(date("Y-m-d H:i:s"))-5*60;
                $new_time = date("Y-m-d H:i:s", $new_time);
                $onlineUsers = User::find()->andWhere(['between', 'online', $new_time, date("Y-m-d H:i:s")])->count();
                    echo $onlineUsers ? $onlineUsers : 0;
                ?></span>
        </div>
    </div>
    <?php if(!Yii::$app->user->isGuest):?>
        <div class="aboutUser">
            <p style="margin: 10px; color:#FFF;" >Привет <?php echo \Yii::$app->user->identity->username; ?> !</p>
            <a type="submit"  style="color: white" href="<?= \yii\helpers\Url::to(['user/logout']) ?>">Выйти</a>
        </div>
    <?php endif;?>
    <div class="statistic">
        <div style="float: right; font-size: 14px"><span style="font-weight:700"> MoreOil </span> - экономическая игра с выводом денег </div>
        <br>
        <br>


       <span style="color:red; font-size: 16px"><?=
           $usersCount = User::find()->count();
           ?></span>
        чел. участвует в проекте,
         <span style="color:red; font-size: 16px">
        <?php
        $sDateStart = date('Y-m-d').' 00:00:00';
        $sDateEnd = date('Y-m-d').' 23:59:59';
        $countUser = User::find()->andWhere(['between', 'created_at', $sDateStart, $sDateEnd])->count();
        echo $countUser."</span>";
        ?>
             за последние 24 часа
             <br>
             <span style="color:red; font-size: 16px">
             <?php $oUserPayment = UserPayment::find()->all();

             $sumBalance = 0;
             if( $oUserPayment){
                 foreach ($oUserPayment as $payment){
                     $sumBalance += $payment->sum;
                 }

                 echo $sumBalance."</span>";
             }else{
                 echo 0.00."</span>";
             }?> Руб выплачено всего, а резерв состовляет
          <span style="color:red; font-size: 16px"> <?php
              $oUserInvoice = Invoice::find()->all();
              $oUserPayment = UserPayment::find()->all();
              $sumInvoice = 0;
              $sumBalance = 0;
                  foreach ($oUserInvoice as $invoise){
                      $sumInvoice += $invoise->sum;
                  }

                  foreach ($oUserPayment as $payment){
                      $sumBalance += $payment->sum;
                  }
                  echo $sumInvoice - $sumBalance."</span>";
              ?> Руб.  <br>проект существует   <span style="color:red; font-size: 16px"> <?php
                  $startDay = new \DateTime("2014-10-01 00:00:00");
                  $currentDay = new \DateTime(date('Y-m-d H:i:s'));
                  echo $startDay->diff($currentDay)->days;
                  ?></span> дней
    </div>
    <div class="logo" style="position: absolute;
right: -49px;
top: 72px;
font-size: 60px;
color: #fff;
font-weight: bold;"><img src="/img/logo.png" alt=""/></div>

    <div class="auth"></div>
    <?php if(!Yii::$app->user->isGuest):?>
        <ul class="menu" style="position: absolute; top: 300px;right: 0;" >

            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/index']) ?>">Главная</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/news']) ?>">Новости</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['payment/list']) ?>">Выплаты</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/about']) ?>">О проекте</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/contact']) ?>">Контакты</a></li>

            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['profile/account']) ?>">Личный кабинет</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['/payment']) ?>">Пополнить баланс</a></li>
            <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['user/change-password']) ?>">Настройки</a></li>

        </ul>
    <?php endif;?>
    <?php if(Yii::$app->user->isGuest):?>
    <ul class="menu" style="position: relative; top: 300px;right: 0;margin-left: 9%;" >

        <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/index']) ?>">Главная</a></li>
        <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/news']) ?>">Новости</a></li>
        <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['payment/list']) ?>">Выплаты</a></li>
        <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/contact']) ?>">Контакты</a></li>
        <li> <a type="submit"  href="<?= \yii\helpers\Url::to(['page/about']) ?>">О проекте</a></li>

    </ul>
<?php endif;?>