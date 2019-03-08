/*
 * @Author: 王亮
 * @LastEditors: 王亮
 * @Description: file content111
 * @Date: 2019-02-20 14:20:58
 * @LastEditTime: 2019-02-22 19:42:17
 * @Description: 入口配置类
 */

const express = require('express');
//业务处理类
const { topicList,topicCheck,topicRecommand,topicDigest,topicDelete,topicSaveOrder,recommandTopicList } = require('./response/business')

let app = express();
//解析,用req.body获取post参数
let bodyParser = require('body-parser');
var options = {
    type: 'application/json'
};




app.use(bodyParser.json(options));
 // 创建 application/x-www-form-urlencoded 66666解析
app.use(bodyParser.urlencoded({           
  extended: true
}));

let router = express.Router();

//获取点评列表
router.get('/getAllTopicListByMoreCondition',topicList)


//审核操作 => 发操作消息结果
router.post('/check',topicCheck)

//推荐操作
router.post('/recommand',topicRecommand)

//推荐操作
router.post('/digest',topicDigest)

//删除已审核
router.post('/delete',topicDelete)

//保存排序
router.post('saveOrder',topicSaveOrder)

//已推荐列表
router.get('/getRecommandTopicList',recommandTopicList)

// 將路由套用至應用程式
app.use('/', router);

app.listen(3000);