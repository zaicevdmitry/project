<?php

use yii\db\Schema;
use yii\db\Migration;

class m150122_142744_add_foreigenkey_for_tables_category_flower extends Migration
{
    public function up()
    {
        $this->addForeignKey('fk_category_link', 'tbl_link', 'category_id', 'tbl_category', 'id', 'cascade');
        $this->addForeignKey('fk_flower_link', 'tbl_link', 'flower_id', 'tbl_flover', 'id', 'cascade');
    }

    public function down()
    {
        echo "m150122_142744_add_foreigenkey_for_tables_category_flower cannot be reverted.\n";

        return false;
    }
}
