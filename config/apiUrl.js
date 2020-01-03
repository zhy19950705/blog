console.log(process.env.NODE_ENV)
const ip = process.env.NODE_ENV === 'development' ?  'http://127.0.0.1:7001' : 'http://120.78.80.132/:7001'
let ipUrl = `${ip}/default/`;
let servicePath = {
    getArticalList: ipUrl + 'getArticleList', //  首页文章列表接口
    getArticalById: ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl + 'getTypeInfo', // 文章分类信息
    getListById: ipUrl + 'getListById/', // 根据类别ID获得文章列表  
}
export default servicePath