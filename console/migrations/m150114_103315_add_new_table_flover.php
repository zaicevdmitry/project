<?php

use yii\db\Schema;
use yii\db\Migration;

class m150114_103315_add_new_table_flover extends Migration
{
    public function up()
    {
        $this->createTable('tbl_flover', [
            'id' => 'pk',
            'category_id' => 'integer',
            'name'=> 'varchar(255)',
            'photo_url' => 'varchar(255)',
            'description'=> 'text'
        ]);

        $this->addForeignKey('fk_category_flover', 'tbl_flover', 'category_id', 'tbl_category', 'id', 'cascade');

    }

    public function down()
    {
        echo "m150114_103315_add_new_table_flover cannot be reverted.\n";

        return false;
    }
}
