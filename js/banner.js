$(document).ready(function(){
	var now=0;
	var next=0;
	var t=setInterval(move,3000);
	var flag=true;
	// 设置所有图片的透明度隐藏为0，而第一张的图片显示为1；
	$(".gm-main .banner .ban-img").css("opacity","0").eq(0).css("opacity","1");
	$(".gm-main .tab em").eq(0).css("opacity","0");
	$(".gm-main .tab span").eq(0).css("opacity","0");
	$(".gm-main .tab .cur").eq(0).css("display","block");
	// 设置下标的第一个给他增加一个类名，同理也是显示；
	$(".gm-main .tab .cur b").eq(0).addClass("Cur");
	function move(){
		// 开关，避免客户因点击过度而造成的影响
		if(flag==false){
			return;
		}
		flag=false;
		next++;
		if(next>=$(".gm-main .banner .ban-img").length){
			next=0;
		}
		$(".gm-main .banner .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
		$(".gm-main .tab em").eq(now).animate({opacity:0.2},1000).end().eq(next).animate({opacity:0},1000);
		$(".gm-main .tab span").eq(now).animate({opacity:1},1000).end().eq(next).animate({opacity:0},1000);
		$(".gm-main .tab .cur").eq(now).css("display","none").end().eq(next).css("display","block");
		// $(".gm-main .tab .cur b").eq(now).removeClass("Cur").end().eq(next).addClass("Cur");
		now=next;
		flag=true;
	}
	// 添加鼠标移入事件，移入停止，离开执行时间函数；
	$(".gm-main .banner").hover(function(){
		$(".gm-main .banner .btn").css("display","block");
		clearInterval(t);
	},function(){
		$(".gm-main .banner .btn").css("display","none");
		t=setInterval(move,3000);
	});
	// 给左右按钮添加点击事件
	$(".gm-main .banner .pre").click(function(){
		moveL();
	});
	$(".gm-main .banner .next").click(function(){
		move();
	});
	// 左按钮点击(移到该元素上)事件执行的函数
	function moveL(){
		if(flag==false){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=($(".gm-main .banner .ban-img").length)-1;
		}
		$(".gm-main .banner .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
		$(".gm-main .tab em").eq(now).animate({opacity:0.2},1000).end().eq(next).animate({opacity:0},1000);
		$(".gm-main .tab span").eq(now).animate({opacity:1},1000).end().eq(next).animate({opacity:0},1000);
		$(".gm-main .tab .cur").eq(now).css("display","none").end().eq(next).css("display","block");
		// $(".gm-main .tab .cur b").eq(now).removeClass("Cur").end().eq(next).addClass("Cur");
		now=next;
		flag=true;
	}
	// 添加选项卡事件
	$(".gm-main .tab .tab-mode").mouseover(function(){
		var index=$(this).index();
		if(index>now){
			if(flag==false){
				return;
			}
			flag=false;
			$(".gm-main .banner .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
			$(".gm-main .tab em").eq(now).animate({opacity:0.2},1000).end().eq(next).animate({opacity:0},1000);
			$(".gm-main .tab span").eq(now).animate({opacity:1},1000).end().eq(next).animate({opacity:0},1000);
			$(".gm-main .tab .cur").eq(now).css("display","none").end().eq(next).css("display","block");
			// $(".gm-main .tab .cur b").eq(now).removeClass("Cur").end().eq(index).addClass("Cur");
			flag=true;
		}else if(index<now){
			if(flag==false){
				return;
			}
			flag=false;
			$(".gm-main .banner .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
			$(".gm-main .tab em").eq(now).animate({opacity:0.2},1000).end().eq(next).animate({opacity:0},1000);
			$(".gm-main .tab span").eq(now).animate({opacity:1},1000).end().eq(next).animate({opacity:0},1000);
			$(".gm-main .tab .cur").eq(now).css("display","none").end().eq(next).css("display","block");
			// $(".gm-main .tab .cur b").eq(now).removeClass("Cur").end().eq(index).addClass("Cur");
			flag=true;
		}else{
			return;
		}
		now=index;
	});
	// 下面双按钮事件
	$(".gm-main .tab .cur").hover(function(){
		var index=$(this).index();
		$(".gm-main .banner .ban-img li").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
		$(".gm-main .tab .cur b").eq(now).removeClass("Cur").end().eq(index).addClass("Cur");
	},function(){

	});
});