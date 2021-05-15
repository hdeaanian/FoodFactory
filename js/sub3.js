$(function(){
	var visual = $(".images > ul > li");
	var tg = $(this);
	var cnt = 0;


	function move(){
		$("").animate({"top":"0"},2000).animate({"top":"-50px"},2000, move);
	}

	move();

	visual.fadeOut();
	visual.eq(cnt).fadeIn();

	setInterval(function(){
		if(cnt >= 5){
			cnt=0
		} else{
			cnt++;
		}

		visual.fadeOut();
		visual.eq(cnt).fadeIn();


	},3000);

	$(".article_menu li").click(function(){
		  $(this).find("a").css({opacity:1});
          $(".article_menu").find("span").removeClass("on");
          $(this).find("span").addClass("on");
     });

});