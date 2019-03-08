/*
 * @Author: 王亮
 * @LastEditors: 王亮
 * @Description: file content
 * @Date: 2019-02-21 19:09:20
 * @LastEditTime: 2019-02-22 19:18:08
 * @Description: 请求接口业务逻辑层
 */
//街口配置类型
const { api } = require('./config')
//公共方法类
const {awaitWarp,getData,postData,postQuery} = require('../utils/util')

const { sendCheckTopic } = require('../message/business')

var exports = module.exports;
/**
 * @description: 获取点评列表
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicList = async function(req, rep){
    let params = req.query
    let url = api.topicUrl
    let result = await awaitWarp(getData({url,params }))
     //返回请求结果
    rep.send(result)
}

/**
 * @description: 审核操作
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicCheck = async function(req, rep){
    let params = req.body
    let url = api.checkUrl
    let result = await awaitWarp(postData(url,params))
    let title = params.title
    //发送审核消息
    sendCheckTopic({status:result.status,title})
    //返回请求结果
    rep.send(result)
}

/**
 * @description: 推荐操作
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicRecommand = async function(req,rep){
    let params = req.body
    let url = api.recommandUrl
    let result = await awaitWarp(postData(url,params))
    //返回请求结果
    rep.send(result)
}

/**
 * @description: 精华操作
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicDigest = async function(req,rep){
    let params = req.body
    let url = api.digestUrl
    let result = await awaitWarp(postData(url,params))
    //返回请求结果
    rep.send(result)
}

/**
 * @description: 删除已审核
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicDelete = async function(req,rep){
    let params = req.body
    let url = api.deleteUrl
    let result = await awaitWarp(postData(url,params))
    //返回请求结果
    rep.send(result)
}

/**
 * @description: 保存排序
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.topicSaveOrder = async function(req,rep){
    let params = req.body
    let url = api.deleteUrl
    let result = await awaitWarp(postData(url,params))
    //返回请求结果
    rep.send(result)
}

/**
 * @description: 已推荐列表
 * @param req {object} 请求对象
 * @param rep {object} 返回对象
 */
exports.recommandTopicList = async function(req,rep){
    let params = req.query
    let url = api.recommandTopicUrl
    let result = await awaitWarp(getData({url,params }))
     //返回请求结果
    rep.send(result)
}