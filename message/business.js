/*
 * @Author: 王亮
 * @LastEditors: 王亮
 * @Description: file content
 * @Date: 2019-02-21 21:03:00
 * @LastEditTime: 2019-02-22 16:40:41
   @Description: 请求接口业务逻辑层
 */
//消息接口配置类
const config = require('./config')
//公共方法类
const {awaitWarp,postData} = require('../utils/util')
var exports = module.exports;

/**
 * @description: 发送审核消息
 * @param result {json} 请求对象
 */
exports.sendCheckTopic = async function({ status }){
    let checkStatus = config.checkStatusDat.find((item) => item.status === status)

    let dat = await postData({url:config.api.baseUrl,data:{
        app_key:config.api.app_key,
        msgType: checkStatus.msgType,
        content: checkStatus.content
    }})
}
