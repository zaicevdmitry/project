<?php

namespace common\models;

use Yii;
use yii\data\ActiveDataProvider;
use yii\web\UploadedFile;

/**
 * This is the model class for table "tbl_portfolio_category".
 *
 * @property integer $id
 * @property string $name
 * @property integer $user_id

 * @property User $user
 */
class Link extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_link';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'flower_id'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'category_id' => Yii::t('app', 'Категория'),
            'flower_id' => Yii::t('app', 'Растение'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFlower()
    {
        return $this->hasOne(Flower::className(), ['id' => 'flower_id']);
    }

    public function saveCategoryFlower($categories_id, $flower_id){

        foreach($categories_id as $category_id){

            $model = new Link();

            $model->category_id = $category_id;
            $model->flower_id = $flower_id;
            $model->save();
        }

        return true;
    }

    public static function getPlantsCategory($id)
    {
        $oCategory  = self::find()->select('*')->andWhere('category_id=:category_id',[':category_id'=>$id])->all();

        $result = [];
        foreach ($oCategory as $item){

            $result[$item->id] = $item->flower->name;
        }

        return $result;
    }
}
