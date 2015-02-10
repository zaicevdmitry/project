<?php
namespace frontend\controllers;

use common\models\City;
use common\models\Country;
use common\models\Pages;
use common\models\Station;
use common\models\User;
use common\models\UserStation;
use frontend\models\Education;
use frontend\models\Experience;
use frontend\models\Interests;
use frontend\models\Skills;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use yii\widgets\ActiveForm;
use Yii;

/**
 * Site controller
 */
class SiteController extends BaseController
{


    public function actionIndex()
    {
        return $this->redirect('page/index');
    }

    public function actionContacts()
    {
        return $this->render('contacts');
    }
}