// 1F楼层上的猜你喜欢效果
$(document).ready(function(){
	var now=0;
	var next=0;
	$(".gome-cn .like_inner").first().show();
	$(".gome-cn .extra").click(function(){
		var index=$(this).index();
		next++;
		if(next>=$(".gome-cn .like-inner").length){
			next=0;
		}
		$(".gome-cn .like_inner").eq(now).hide().end().eq(index).show();
		// now=next;
		// next=index;
	});
});
// 楼层间选项卡
function floor(floor){
   	$(document).ready(function(){
		$(floor+".floor .list li").first().show();
		$(floor+".floor .list li").hover(function(){
			var index=$(this).index();
			$(floor+".floor .list li").removeClass("tab-select").eq(index).addClass("tab-select");
			$(floor+".floor .tabBox").hide().eq(index).show();
		},function(){
			// $("#gome-f1 .tabBox").hide().eq(index).show();
		});
	});
}
	floor("#gome-f1");
	floor("#gome-f2");
	floor("#gome-f3");
	floor("#gome-f4");
	floor("#gome-f5");
	floor("#gome-f6");
	floor("#gome-f7");
	floor("#gome-f8");
	floor("#gome-f9");

// 2F
// $(document).ready(function(){
// 	$("#gome-f2 .list li").first().show();
// 	$("#gome-f2 .list li").hover(function(){
// 		var index=$(this).index();
// 		$("#gome-f2 .list li").removeClass("tab-select").eq(index).addClass("tab-select");
// 		$("#gome-f2 .tabBox").hide().eq(index).show();
// 	},function(){
// 		// $("#gome-f1 .tabBox").hide().eq(index).show();
// 	});
// });
// banner图选项卡
$(document).ready(function(){
	$(".gome-nav .item").hover(function(){
		var index=$(this).index();
		$(".item .fore_list").hide().eq(index).show();
	},function(){
		$(".item .fore_list").hide();
	});
});
// 顶部关闭banner
$(document).ready(function(){
	$(".logo-img .lazy").show();
	$(".close").click(function(){
		$(".logo-img .lazy").animate({height:0},600);
		$(".logo-banner").animate({height:0},600);
		$(".close").hide();
	});
});
// 楼层右按钮点击效果
function pre(pre){
	$(document).ready(function(){
		var now=0;
		var next=0;
		var flag=true;
		$(pre+".floor .tabBox").hide().eq(0).show();
		$(pre+".floor .tab-page").click(function(){
			var index=$(this).index();
			next++;
			if(index>now){
				if(flag==false){
					return;
				}
				flag=false;
				if(next>=$(pre+".floor .list li").length){
					next=0;
				}
				$(pre+".floor .tabBox").eq(now).hide().end().eq(next).show();
				$(pre+".floor .list li").removeClass("tab-select");
				$(pre+".floor .list li").eq(next).addClass("tab-select");
				now=next; 
				flag=true;
			}
		});
		$(pre+".floor .mc").hover(function(){
			$(pre+".floor .tab-page").show();
		},function(){
			$(pre+".floor .tab-page").hide();
		});
	});
}
	pre("#gome-f1");
	pre("#gome-f2");
	pre("#gome-f3");
	pre("#gome-f4");
	pre("#gome-f5");
	pre("#gome-f6");
	pre("#gome-f7");
	pre("#gome-f8");
	pre("#gome-f9");

// 2F
// $(document).ready(function(){
// 	var now=0;
// 	var next=0;
// 	$("#gome-f2 .tabBox").hide().eq(0).show();
// 	$("#gome-f2 .tab-page").click(function(){
// 		var index=$(this).index();
// 		next++;
// 		if(next>=$("#gome-f2 .list li").length){
// 			next=0;
// 		}
// 		$("#gome-f2 .tabBox").eq(now).hide().end().eq(next).show();
// 		$("#gome-f2 .list li").removeClass("tab-select");
// 		$("#gome-f2 .list li").eq(next).addClass("tab-select");
// 		now=next; 
// 	});
// 	$("#gome-f2 .mc").hover(function(){
// 		$("#gome-f2 .tab-page").show();
// 	},function(){
// 		$("#gome-f2 .tab-page").hide();
// 	});
// });
