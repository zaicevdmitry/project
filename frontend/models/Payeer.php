<?php
/**
 * Created by PhpStorm.
 * User: papvan
 * Date: 16.10.14
 * Time: 13:30
 */
namespace frontend\models;

use common\models\Invoice;
use Yii;
use yii\base\Model;

/**
 * Payeer model
 */
class Payeer extends Model
{

    protected static function getArHash($sum)
    {
        return array(
            \Yii::$app->params['payeer']['m_shop'],
            self::getNewOrderId(),
            $sum ? $sum : self::getAmount(),
            \Yii::$app->params['payeer']['m_curr'],
            self::getDesc(),
            \Yii::$app->params['payeer']['m_key'],
        );
    }

    public static  function getSign($sum = null)
    {
        return strtoupper(hash('sha256', implode(':', self::getArHash($sum))));
    }

    public static function getAmount()
    {
        return number_format(\Yii::$app->params['pay']['default_amount'], 2, '.', '');
    }

    public static function getDesc()
    {
        return base64_encode(\Yii::$app->params['payeer']['m_desc']);
    }

    public static function getNewOrderId()
    {
        return 1;
//        return rand(1,10000000);
    }
}
