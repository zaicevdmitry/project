<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 24.02.14
 * Time: 0:14
 */

namespace common\filters;


class HtmlPurifier extends \yii\helpers\HtmlPurifier {

    /**
     * Экранирует html
     *
     * @param        $sValue
     * @param string $sAllowedTag - Разрешенные теки. Перечислять через запятую.
     *
     * @return string
     */
    public static function escape( $sValue, $sAllowedTag = '' ){

        $aOptions = [ 'HTML.Allowed' => $sAllowedTag, 'Core.EscapeInvalidTags'=>true ];

        return parent::process( $sValue, $aOptions );
    }

    public static function clear( $sValue, $sAllowedTag = '' ){

        $aOptions = [ 'HTML.Allowed' => $sAllowedTag ];

        return parent::process( $sValue, $aOptions );
    }
} 