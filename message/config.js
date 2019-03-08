/*
 * @Author: 王亮
 * @LastEditors: 王亮
 * @Description: file content
 * @Date: 2019-02-21 20:22:43
 * @LastEditTime: 2019-02-22 16:32:23
 * @Description: 推送消息配置类
 */


module.exports = {
    //接口配置
    api:{
        //接口跟目录
        baseUrl:'http://backend-gw.yiche.com/msg-svc/userMessage/sendUserMessage',
        //APP唯一应用标识
        app_key:100114
    },
    //点评审核状态
    checkStatusDat:[{
        //状态成功
        status:1,
        msgType:1301,
        content:'您发布的【{0}】,点评审核已通过'

    },{
        //状态失败
        status:0,
        msgType:1302,
        content:'您发布的【{0}】,点评审核未通过'
    }]
}