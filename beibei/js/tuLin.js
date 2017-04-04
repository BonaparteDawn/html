/**
 * Created by HP on 2017/3/10.
 */

var api = "http://www.tuling123.com/openapi/api";
var APIkey = "604cd5fd46144352aac98298e3848977";
function serverSay(info){
    if(object.isNotEmpty(info)){
        if(object.isTrue(printLog)){
            console.log(info);
        }
    }
}
function clientSay(info,responseCallBack){
    var cookie = new Cookies2();
    var userID = cookie.get("qq");
    var url = api+"?"+"key="+APIkey+"&info="+info+"&userid="+userID;
    new NetConnection().httpGet(url,undefined,function(data){
        if(object.isNotEmpty(responseCallBack)){
            responseCallBack(data);
        }else{
            serverSay(data);
        }
    },function(data){
        alert("服务器访问失败消息");
    });
}