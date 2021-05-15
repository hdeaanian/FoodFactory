$(function(){
   $("#menu_center dd").hide();
   $("#menu_center li").mouseenter(function(){
	   $("#menu_center dd").stop().slideDown(500); 
	   $(".main_menu_center").css({"background":"rgba(254,254,254,1)", "height":"284px"}).find("a").css("color","black");
	   $(".main_menu_center img").attr({"src":"img/sub5/hd_logo_on.png"});
	  
	
   });

   $(".main_menu").mouseleave(function(){
	   $(".main_menu dd").stop().slideUp();
	   $(".main_menu_center ").css({"background":"rgba(254,254,254,0)", "height":"0px"}).find("a").css("color","white");
	   $(".main_menu_center img").attr({"src":"img/sub5/hd_logo.png"});

 });

   $(".article_menu li").click(function(){
		  $(this).find("a").css({opacity:1});
          $(".article_menu").find("span").removeClass("on");
          $(this).find("span").addClass("on");
     });



}); 

