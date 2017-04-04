function Cookies2(){
	this.cookie = $.cookie;
	this.put=function(key,value){
		$("#tips").data(key,value);
	}

	this.get=function(key){
		return $("#tips").data(key);
	}
}