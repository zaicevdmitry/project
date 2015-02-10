<?php

namespace common\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use Yii;

/**
 * UserSearch represents the model behind the search form about `common\models\User`.
 */
class UserSearch extends User
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['username', 'email', 'auth_key', 'password_hash', 'password_reset_token', 'created_at', 'updated_at', 'role', 'activate_key'], 'safe'],

            ['username', 'filter', 'filter' => function ($value) {
                    return \common\filters\HtmlPurifier::escape( $value );
                }],

            ['email', 'filter', 'filter' => function ($value) {
                    return \common\filters\HtmlPurifier::escape( $value );
                }],

            ['activate_key', 'filter', 'filter' => function ($value) {
                    return \common\filters\HtmlPurifier::escape( $value );
                }],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = User::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort'=> ['defaultOrder' => ['id'=>SORT_DESC]]
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'created_at' => $this->created_at,
        ]);

        $query->andFilterWhere(['like', 'username', $this->username])
            ->andFilterWhere(['like', 'email', $this->email])
            ->andFilterWhere(['like', 'auth_key', $this->auth_key])
            ->andFilterWhere(['like', 'password_hash', $this->password_hash])
            ->andFilterWhere(['like', 'password_reset_token', $this->password_reset_token])
            ->andFilterWhere(['like', 'role', $this->role])
            ->andFilterWhere(['like', 'activate_key', $this->activate_key]);

        return $dataProvider;
    }
}
