<?php

use yii\db\Schema;
use yii\db\Migration;

class m150122_142302_add_link_tbl_categoryflower extends Migration
{
    public function up()
    {
        $this->dropForeignKey('fk_category_flover', 'tbl_flover', 'category_id', 'tbl_category', 'id', 'cascade');
        $this->createTable('tbl_link', [
            'id' => 'pk',
            'category_id' => 'integer',
            'flower_id'=> 'integer',
        ]);
    }

    public function down()
    {
        echo "m150122_142302_add_link_tbl_categoryflower cannot be reverted.\n";

        return false;
    }
}
