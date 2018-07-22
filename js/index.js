"use strict";
//----up to top----
$(window).scroll(function(){  //只要窗口滚动,就触发下面代码
    let scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
    if( scrollt >100 ){  //判断滚动后高度超过200px,就显示
        $(".totop").fadeIn(200); //淡出
    }else{
        $(".totop").stop().fadeOut(200); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
    }
});
$(".totop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
    $("html,body").animate({scrollTop:"0px"},200);
});
$(window).scroll(function(){
	let scrollt = document.documentElement.scrollTop + document.body.scrollTop;
	if(scrollt>320){
		$('.aside').addClass('aside-top');
	}else{
		$('aside').removeClass('aside-top');
	}
})