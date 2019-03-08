const baseUrl = 'http://172.20.4.172:5555/admin/'
module.exports = {
    api:{
        //点评列表接口地址
        topicUrl: baseUrl + 'getAllTopicListByMoreCondition',
        //审核地址
        checkUrl: baseUrl +'check',
        //推荐操作
        recommandUrl: baseUrl +'recommand',
        //精华操作
        digestUrl: baseUrl +'digest',
        //删除已审核
        deleteUrl: baseUrl + 'delete',
        //保存排序
        saveOrder:baseUrl + 'saveOrder',
        //已推荐列表
        recommandTopicUrl:baseUrl + 'getRecommandTopicList'
    }
}