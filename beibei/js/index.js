/**
 * Created by Bonaparte.Dawn on 2017/3/10.
 */
function messaged(user,message){
    var time = new Date().Format("hh:mm:ss");
    return "<div>"+time+"--"+user+":"+message+"</div>";
}
function chatEvent(){
    var cookie = new Cookies2();
    $("#clientButton").click(function(){
        var clientTxt = $("#clientText").val();
        var machineHandler = $("#machine");
        var name = cookie.get("name");
        machineHandler.prepend(messaged(name,clientTxt));
        clientSay(clientTxt,function (data){
            machineHandler.prepend(messaged("贝贝",data.text));
        });
    });
}
function userIDValidate(userID,tipsHandler) {
    var res = false;
    var reg = /^([0-9]+)$/;
    if(!reg.test(userID)){
        tipsHandler.text("请输入正确的QQ号");
    }else{
        res = true;
        tipsHandler.text("");
    }
    return res;
}
function infoEvent(){
    var userInfoHandler = $("#userInfo");
    var chatHandler = $("#chat");
    var nameHandler = $("#name");
    var qqHandler = $("#qq");
    var saveHandler = $("#save");
    var tipsHandler = $("#tips");
    qqHandler.keyup(function(){
        var qq = qqHandler.val();
        userIDValidate(qq,tipsHandler);
    });
    saveHandler.click(function(){
        var name = nameHandler.val();
        var qq = qqHandler.val();
        if(object.isEmpty(name) || object.isEmpty(qq)){
            tipsHandler.text("请输入用户名和QQ号...");
        }else{
            if(userIDValidate(qq,tipsHandler)){
                var cookie = new Cookies2();
                cookie.put("name",name);
                cookie.put("qq",qq);
                userInfoHandler.hide();
                chatHandler.show();
                tipsHandler.text("");
            }
        }
    });
}
function initPage(){
    var userInfoHandler = $("#userInfo");
    var chatHandler = $("#chat");
    var cookie = new Cookies2();
    var name = cookie.get("name");
    var qq = cookie.get("qq");
    if(object.isEmpty(name) || object.isEmpty(qq)){
        chatHandler.hide();
    }else{
        userInfoHandler.hide();
    }
}

var page = function(){
    return {init:function(){
        initPage();
        infoEvent();
        chatEvent();
    }};
}();
$(function(){
   page.init();
});