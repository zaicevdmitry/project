<?php
namespace console\controllers;

use common\models\Station;
use common\models\User;

/**
 * Created by PhpStorm.
 * User: mark
 * Date: 29.07.14
 * Time: 15:40
 */

class CronController extends \yii\console\Controller
{
    public function actionWater() {
        Station::water();
    }
}