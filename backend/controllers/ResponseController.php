<?php
/**
 * Created by PhpStorm.
 * User: Dima
 * Date: 30.01.2015
 * Time: 23:48
 */

namespace backend\controllers;


use common\models\Category;
use common\models\Flower;
use common\models\Link;
use yii\filters\ContentNegotiator;
use yii\web\Controller;
use yii\web\Response;

class ResponseController extends Controller{


    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON
            ]

        ];

        return $behaviors;
    }

    public function actionGetMainCategory($is_main)
    {
        $this->layout=false;
        $mainCategories = Category::getMainCategory($is_main);

        return json_encode($mainCategories, JSON_UNESCAPED_UNICODE);
    }

    public function actionPlantsCategory($id)
    {
        $this->layout=false;
        $plants = Link::getPlantsCategory($id);

        return json_encode($plants, JSON_UNESCAPED_UNICODE);
    }

    public function actionPlant($id)
    {
        $this->layout=false;
        $plant = Flower::getPlant($id);

        return json_encode($plant, JSON_UNESCAPED_UNICODE);
    }
} 