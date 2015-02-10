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
class Flower extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_flover';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['category_id'], 'safe'],
            [['photo_url', 'name'], 'string', 'max' => 255],
            [['description'], 'string', 'max' => 2500],

            ['photo_url','filter', 'filter' => function ($value) {
                return \common\filters\HtmlPurifier::escape( $value );
            }],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Название растения'),
            'category_id' => Yii::t('app', 'Категория'),
            'photo_url' => Yii::t('app', 'Фото'),
            'description' => Yii::t('app', 'Описание'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }

    public function search()
    {
        $query = Flower::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        return $dataProvider;
    }

    public function saveImage($model){

        $sUploadDirectory = Yii::getAlias('@backend/web/uploads/theme/original');
        $sSmallImageDirectory = Yii::getAlias('@backend/web/uploads/theme/50x50');
        $image = UploadedFile::getInstance($model, 'photo_url' );

        if(!$image==NULL){
            $aSourcePath = pathinfo($image);

            $model->photo_url = md5(microtime().rand(1,10)) .'.'. $aSourcePath['extension'];
            $image->saveAs($sUploadDirectory.DIRECTORY_SEPARATOR.$model->photo_url);

            $picture = new  \frontend\components\SimpleImage();
            $picture->load($sUploadDirectory.DIRECTORY_SEPARATOR.$model->photo_url);

            $imageHeight = $picture->getHeight();
            $imageWidth = $picture->getWidth();

            if( $imageHeight < 50 || $imageWidth < 50 ){
                return [
                    'name'=>'',
                    'status'=>'error',
                    'message'=>'Ошибка! Изображение должно быть не меньше 200x200 пикселей'
                ];
            }

            if( $imageWidth > $imageHeight ){
                $picture->resizeToHeight(50);
            }else if( $imageHeight > $imageWidth ){
                $picture->resizeToWidth(50);
            }

            $picture->save($sSmallImageDirectory.DIRECTORY_SEPARATOR.$model->photo_url);
            return true;
        }
        return true;
    }

    public static function getPlant($id){
        $oPlant  = self::findOne($id);

        $result = [];
        foreach ($oPlant as $item){
            $result[] = $item;
        }

        return $result;
    }
}
