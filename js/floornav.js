$(document).ready(function(){
    var floornav=$(".floornav");
    var nav=$(".floornav .nav");
    var floor=$(".floor");
    var span=$(".floornav .nav span");
    var p=$(".floornav .nav p");
    var btn=$(".floornav .btn");
    var top=btn.eq(0);
    var bot=btn.eq(1);
    var flag=true;
    $(window).scroll(function(){
      if(flag){
      var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if(floor.eq(0).offset().top<=obj.scrollTop+800){
          floornav.css("display","block");
        }else{
          floornav.css("display","none");
        }
        for(var i=0;i<floor.length;i++){ 
          if(floor.eq(i).offset().top<=obj.scrollTop+500){
            span.css("color","#777");
            p.css("color","#5e5e5e");
            span.eq(i).css("color","#e3101e");
            p.eq(i).css("color","#e3101e");         
          }   
        }
      } 
    });
  // 每一楼层点击事件
    nav.click(function(){
        var index=nav.index($(this));
        flag=false;
        $("body").animate({"scrollTop":floor.eq(index).offset().top-200},function(){
          flag=true
        });
    });
    top.click(function(){
        flag=false;
        $("body").animate({"scrollTop":0},function(){
          flag=true
        });
    });
    bot.click(function(){
        flag=false;
        $("body").animate({"scrollTop":4674},function(){
        flag=true
        });
    });
});