<?php

use yii\db\Schema;
use yii\db\Migration;

class m150130_195150_add_field_is_main_for_category extends Migration
{
    public function up()
    {
        $this->addColumn('tbl_category','is_main','integer');
    }

    public function down()
    {
        echo "m150130_195150_add_field_is_main_for_category cannot be reverted.\n";

        return false;
    }
}
