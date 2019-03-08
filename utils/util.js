/*
 * @Author: 王亮
 * @LastEditors: 王亮
 * @Description: file content
 * @Date: 2019-02-21 10:03:49
 * @LastEditTime: 2019-02-22 19:14:03
 * @Description: 公共方法类库
 */
//字符串处理类
const { get, post } = require('axios'); 

var exports = module.exports;
/**
 * 封装错误处理
 * @params promises {Promises} 输入
 * return {json} : 错误不通过: status:0,成功通过:status:1
 */
exports.awaitWarp = function(promises){
    return promises.then(function (data) {
        return {status: 1, message: '请求成功', data: data}
    }).catch(function (err) {
        return { status: 0, message: err, data: []}
    })
}

/**
 * get请求
 * @params params {json} 输入参数
 * return {json} : 错误不通过: status:0,成功通过:status:1
 */
exports.getData = function({url,data}){
    return new Promise((resolve,reject)=>{
        get(url,{
            params:data
        }).then(function(res){
            //返回结果
            resolve(res.data)
        }).catch(function (error) {
            reject({ status:0, message:'node请求服务器失败:' + error, data:[] })
        })
    })
}

/**
 * post请求
 * @params params {json} 输入参数
 * return {json} : 错误不通过: status:0,成功通过:status:1
 */
exports.postData = function({url,data}){
    return new Promise((resolve,reject)=>{
        post(url,data).then(function(res){
            //返回结果
            resolve(res.data)
        }).catch(function (error) {
            reject({ status:0, message:'node请求服务器失败:' + error, data:[] })
        })
    })
}
