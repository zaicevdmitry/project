<?php

use yii\db\Migration;

class m150114_084456_add_new_table_category extends Migration
{
    public function up()
    {
        $this->createTable('tbl_category', [
            'id' => 'pk',
            'name'=> 'varchar(255)',
        ]);
    }

    public function down()
    {
        echo "m150114_084456_add_new_table_category cannot be reverted.\n";

        return false;
    }
}
