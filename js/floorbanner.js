// 楼层轮播图
// 1F
function floor_lunbo(obj){
	$(document).ready(function(){
		var now=0;
		var next=0;
		var t=setInterval(move,3000);
		var flag=true;
		// 设置所有图片的透明度隐藏为0，而第一张的图片显示为1；
		$(obj+".floor .lunbo .ban-img").css("opacity","0").eq(0).css("opacity","1");
		// 设置下标的第一个给他增加一个类名，同理也是显示；
		$(obj+".floor .page li").eq(0).addClass("first");
		function move(){
			// 天关，避免客户因点击过度而造成的影响
			if(flag==false){
				return;
			}
			flag=false;
			next++;
			if(next>=$(obj+".floor .lunbo .ban-img").length){
				next=0;
			}
			$(obj+".floor .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
			$(obj+".floor .page li").eq(now).removeClass("first").end().eq(next).addClass("first");
			now=next;
			flag=true;
		}
		// 添加鼠标移入事件，移入停止，离开执行时间函数；
		$(obj+".floor .lunbo").hover(function(){
			$(obj+".floor .lunbo .btn").css("display","block");
			clearInterval(t);
		},function(){
			$(obj+".floor .lunbo .btn").css("display","none");
			t=setInterval(move,3000);
		});
		// 给左右按钮添加点击事件
		$(obj+".floor .lunbo .pre").click(function(){
			moveL();
		});
		$(obj+".floor .lunbo .next").click(function(){
			move();
		});
		// 左右按钮点击(移到该元素上)事件执行的函数
		function moveL(){
			if(flag==false){
				return;
			}
			flag=false;
			next--;
			if(next<0){
				next=($(obj+".floor .lunbo .ban-img").length)-1;
			}
			$(obj+".floor .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
			$(obj+".floor .page li").eq(now).removeClass("first").end().eq(next).addClass("first");
			now=next;
			flag=true;
		}
		// 添加选项卡事件
		$(obj+".floor .page li").mouseover(function(){
			var index=$(this).index();
			if(index>now){
				if(flag==false){
					return;
				}
				flag=false;
				$(obj+".floor .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
				$(obj+".floor .page li").eq(now).removeClass("first").end().eq(index).addClass("first");
				flag=true;
			}else if(index<now){
				if(flag==false){
					return;
				}
				flag=false;
				$(obj+".floor .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
				$(obj+".floor .page li").eq(now).removeClass("first").end().eq(index).addClass("first");
				flag=true;
			}else{
				return;
			}
			now=index;
		});
	});
}
	floor_lunbo("#gome-f1");
	floor_lunbo("#gome-f2");
	floor_lunbo("#gome-f3");
	floor_lunbo("#gome-f4");
	floor_lunbo("#gome-f5");
	floor_lunbo("#gome-f6");
	floor_lunbo("#gome-f7");
	floor_lunbo("#gome-f8");
	floor_lunbo("#gome-f9");
// 2F
// $(document).ready(function(){
// 	var now=0;
// 	var next=0;
// 	var t=setInterval(move,3000);
// 	var flag=true;
// 	// 设置所有图片的透明度隐藏为0，而第一张的图片显示为1；
// 	$("#gome-f2 .lunbo .ban-img").css("opacity","0").eq(0).css("opacity","1");
// 	// 设置下标的第一个给他增加一个类名，同理也是显示；
// 	$("#gome-f2 .page li").eq(0).addClass("first");
// 	function move(){
// 		// 天关，避免客户因点击过度而造成的影响
// 		if(flag==false){
// 			return;
// 		}
// 		flag=false;
// 		next++;
// 		if(next>=$("#gome-f2 .lunbo .ban-img").length){
// 			next=0;
// 		}
// 		$("#gome-f2 .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
// 		$("#gome-f2 .page li").eq(now).removeClass("first").end().eq(next).addClass("first");
// 		now=next;
// 		flag=true;
// 	}
// 	// 添加鼠标移入事件，移入停止，离开执行时间函数；
// 	$("#gome-f2 .lunbo").hover(function(){
// 		$("#gome-f2 .lunbo .btn").css("display","block");
// 		clearInterval(t);
// 	},function(){
// 		$("#gome-f2 .lunbo .btn").css("display","none");
// 		t=setInterval(move,3000);
// 	});
// 	// 给左右按钮添加点击事件
// 	$("#gome-f2 .lunbo .pre").click(function(){
// 		moveL();
// 	});
// 	$("#gome-f2 .lunbo .next").click(function(){
// 		move();
// 	});
// 	// 左按钮点击(移到该元素上)事件执行的函数
// 	function moveL(){
// 		if(flag==false){
// 			return;
// 		}
// 		flag=false;
// 		next--;
// 		if(next<0){
// 			next=($("#gome-f2 .lunbo .ban-img").length)-1;
// 		}
// 		$("#gome-f2 .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
// 		$("#gome-f2 .page li").eq(now).removeClass("first").end().eq(next).addClass("first");
// 		now=next;
// 		flag=true;
// 	}
// 	// 添加选项卡事件
// 	$("#gome-f2 .page li").mouseover(function(){
// 		var index=$(this).index();
// 		if(index>now){
// 			if(flag==false){
// 				return;
// 			}
// 			flag=false;
// 			$("#gome-f2 .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
// 			$("#gome-f2 .page li").eq(now).removeClass("first").end().eq(index).addClass("first");
// 			flag=true;
// 		}else if(index<now){
// 			if(flag==false){
// 				return;
// 			}
// 			flag=false;
// 			$("#gome-f2 .lunbo .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
// 			$("#gome-f2 .page li").eq(now).removeClass("first").end().eq(index).addClass("first");
// 			flag=true;
// 		}else{
// 			return;
// 		}
// 		now=index;
// 	});
// });
