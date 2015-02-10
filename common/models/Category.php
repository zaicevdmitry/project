<?php

namespace common\models;

use Yii;
use yii\data\ActiveDataProvider;

/**
 * This is the model class for table "tbl_portfolio_category".
 *
 * @property integer $id
 * @property string $name

 * @property User $user
 */
class Category extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_category';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 255],
            [['is_main'], 'integer'],

        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Название категории'),
            'is_main' => Yii::t('app', 'Главная категория'),
        ];
    }


    public function search()
    {
        $query = Category::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        return $dataProvider;
    }

    /**
     * Список категорий для селекта
     * @return array
     */
    public static function getTreeMap()
    {
        $oCategory  = self::find()->orderBy('name')->all();

        $result = [];
        foreach ($oCategory as $c){

            $result[$c->id] = $c->name;
        }
        return $result;
    }

    /**
     * Список категорий для селекта
     * @return array
     */
    public static function getMainCategory($is_main)
    {
        $oCategory  = self::find()->select('id,name')->andWhere($is_main)->all();

        $result = [];
        foreach ($oCategory as $c){

            $result[$c->id] = $c->name;
        }

        return $result;
    }
}
