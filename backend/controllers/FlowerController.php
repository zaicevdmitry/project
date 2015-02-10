<?php

namespace backend\controllers;

use backend\components\Controller;
use common\models\Category;
use common\models\Flower;
use common\models\Link;
use Yii;
use yii\web\NotFoundHttpException;

/**
 * PagesController implements the CRUD actions for Pages model.
 */
class FlowerController extends Controller
{
    /**
     * Lists all Pages models.
     * @RETURN mixed
     */
    public function actionIndex()
    {
        $searchModel = new Flower();
        $dataProvider = $searchModel->search();

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Pages model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Pages model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Flower();
        $link = new Link();
        $oCategory = Category::find()->all();

        if(!$oCategory){
            Yii::$app->session->setFlash('error', 'Список категорий пуст. Пожалуйста создайте категорию.');
            return $this->redirect(['index']);
        }


        if ($model->load(Yii::$app->request->post())){

            if ( $model->saveImage($model) && $model->save() && $link->saveCategoryFlower($model->category_id, $model->id)) {
                return $this->redirect(['index']);
            } else {
                return $this->render('create', [
                    'model' => $model,
                ]);
            }
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionNew()
    {
        $model = new Flower();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }
    }

    /**
     * Updates an existing Pages model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $stack = [];
        $link = new Link();
        $image = $model->photo_url;

        if ($model->load(Yii::$app->request->post())) {
            $model->photo_url = $image;
            if($link->saveCategoryFlower($model->category_id, $model->id) && $model->saveImage($model) && $model->save() ) {
                return $this->redirect(['index']);

            } else {
                return $this->render('update', [
                    'model' => $model,
                ]);
            }
        }

        $aCategoryId  = Link::find()->select('category_id')->andWhere('flower_id=:flower_id',[':flower_id'=> $id])->all();

        foreach($aCategoryId as $category){
            array_push($stack,$category->category_id);
        }

        $model->category_id = $stack;

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Pages model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $page = $this->findModel($id);
        $page->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Pages model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Pages the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Flower::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
