// gome-top顶部选项卡
$(document).ready(function(){
	$(".gome-top-left .gome-user").hover(function(){
		$(".gome-top-left .public-dropdown").css("display","block");
		$(".gome-top-left .user-name").css("background","#fff");
		$(".gome-top-left .user-name").css("border","1px solid #ccc").css("border-bottom","0px");
	},function(){
		$(".gome-top-left .user-name").css("background","");
		$(".gome-top-left .user-name").css("border","").css("border-bottom","0px");
		$(".gome-top-left .public-dropdown").css("display","none");
	});
});
$(document).ready(function(){
	$(".gome-myhome").hover(function(){
		$(".gome-myhome .public-dropdown").css("display","block");
		$(".gome-myhome .user-name").css("background","#fff");
		$(".gome-myhome .user-name").css("border","1px solid #ccc").css("border-bottom","0px");
	},function(){
		$(".gome-myhome .user-name").css("background","");
		$(".gome-myhome .user-name").css("border","").css("border-bottom","0px");
		$(".gome-myhome .public-dropdown").css("display","none");
	});
});
$(document).ready(function(){
	$(".gome-service").hover(function(){
		$(".gome-service .public-dropdown").css("display","block");
		$(".gome-service .user-name").css("background","#fff");
		$(".gome-service .user-name").css("border","1px solid #ccc").css("border-bottom","0px");
	},function(){
		$(".gome-service .user-name").css("background","");
		$(".gome-service .user-name").css("border","").css("border-bottom","0px");
		$(".gome-service .public-dropdown").css("display","none");
	});
});
$(document).ready(function(){
	$(".gome-top-nav").hover(function(){
		$(".gome-top-nav .public-dropdown").css("display","block");
		$(".gome-top-nav .user-name").css("background","#fff");
		$(".gome-top-nav .user-name").css("border","1px solid #ccc").css("border-bottom","0px");
	},function(){
		$(".gome-top-nav .user-name").css("background","");
		$(".gome-top-nav .user-name").css("border","").css("border-bottom","0px");
		$(".gome-top-nav .public-dropdown").css("display","none");
	});
});
$(document).ready(function(){
	$(".gome-phone").hover(function(){
		$(".gome-phone .public-dropdown").css("display","block");
		$(".gome-phone .user-name").css("background","#fff");
		$(".gome-phone .user-name").css("border","1px solid #ccc").css("border-bottom","0px");
	},function(){
		$(".gome-phone .user-name").css("background","");
		$(".gome-phone .user-name").css("border","").css("border-bottom","0px");
		$(".gome-phone .public-dropdown").css("display","none");
	});
});
// 国美会员轮播图
$(document).ready(function(){
	var ow=$(".icon-lunbo .lunbo ul").width();
	// var t=setInterval(move,2000);
	var flag=true;
	function move(){
		if(flag==false){
			return;
		}
		flag=true;
		$(".icon-lunbo .lunbo").animate({left:-ow},669,function(){
			$(".icon-lunbo .lunbo").append($(".icon-lunbo .lunbo ul").first());
			$(".icon-lunbo .lunbo").css("left",0);
			flag=true;
		});
	}
	// $("icon-lubo").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(move,2000);
	// });
	$(".icon-prev").click(function(){
		moveL();
	});
	$(".icon-next").click(function(){
		move();
	});
	function moveL(){
		if(flag==false){
			return;
		}
		flag=true;
		$(".icon-lunbo .lunbo ul").last().insertBefore($(".icon-lunbo .lunbo ul").first());
		$(".icon-lunbo .lunbo").css("left",-ow);
		$(".icon-lunbo .lunbo").animate({left:0},669,function(){
			flag=true;
		});
	}
});