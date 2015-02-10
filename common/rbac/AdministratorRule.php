<?php
namespace common\rbac;

use yii\rbac\Rule;

class AdministratorRule extends Rule
{
    public $name = 'Administrator';

    public function execute($user, $item, $params)
    {
        return true;
    }
}