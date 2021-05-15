$(function(){

	$(".article_menu li").click(function(){
		  $(this).find("a").css({opacity:1});
          $(".article_menu").find("span").removeClass("on");
          $(this).find("span").addClass("on");
     });

});