function tj(){
	var ipval=$(".min-m-z form input").val();
	if(ipval===""){
		return false;
	}
	if( ipval.indexOf("用户名"||"密码"||"手机号"||"请输入认证码")>=0){
		return false;
	}
}






$(function(){
	
	$(".min-m-z form input").blur(function(){
		if(this.value.indexOf("用户名")>=0){
			$(this).siblings("p").addClass("none");
		}
		if(this.value.indexOf("密码")>=0){
			$(this).siblings("p").addClass("none");
		}
		if(this.value.indexOf("手机号")>=0){
			$(this).siblings("p").addClass("none");
		}
		if(this.value.indexOf("请输入认证码")>=0){
			$(this).siblings("p").addClass("none");
		}
		
	})
})

