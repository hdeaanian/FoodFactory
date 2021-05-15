$(function(){
	var visual = $("#section01 > .images li");
	var btn = $("#btn > li");
	var tg;
	var cnt = 0;
    var i;
    var window=$(window);

    /* header event */
	 $("#menu_center dd").hide();
     $("#menu_center li").mouseenter(function(){
	   $("#menu_center dd").stop().slideDown(500); 
	   $(".main_menu_center").css({"background":"rgba(254,254,254,1)", "height":"284px"}).find("a").css("color","black");
	   $(".main_menu_center img").attr({"src":"img/main/hd_logo_on.png"});
	  
	
     });

     $(".main_menu").mouseleave(function(){
	   $(".main_menu dd").stop().slideUp();
	   $(".main_menu_center ").css({"background":"rgba(254,254,254,0)", "height":"0px"}).find("a").css("color","white");
	   $(".main_menu_center img").attr({"src":"img/main/hd_logo.png"});

    });

    $(".article_menu li").click(function(){
		  $(this).find("a").css({opacity:1});
          $(".article_menu").find("span").removeClass("on");
          $(this).find("span").addClass("on");
     });






	/* 스크롤 이동 헤더 고정 */
	window.scroll(function(){
		var num=$(this).scrollTop();
		if(num > 0){
			$(".hd_wrap").css({position:"fixed"});
		}
	});

    /* 이미지 자동전환 */
    visual.eq(0).fadeIn();
	timer();
    function timer(){
	    setIntervalId = setInterval(function(){
		 
		    visual.stop().fadeOut();
		    visual.eq(cnt).stop().fadeIn();
   if(cnt >= 6){
			    cnt=0
		    } else{
			    cnt++;
		    }
		btn.eq(cnt).trigger('click');
	    },3000);
    }

    /* 마우스 아이콘 애니메이션 */
    function move(){
		$(".mouse").animate({"bottom":"70"},1000).animate({"bottom":"50"},1000, move);
	}

	move();

    /* 마우스오버/아웃 자동전환 on/off*/ 
	btn.on({
		mouseover:function(){
			  clearInterval(setIntervalId)
		},
		mouseout:function(){
				timer();
		}
	});

    /* 버튼 클릭 이미지 이동 및 버튼 on/off */
	btn.on('click',function(){
		tg=$(this);
        var i=tg.index();

		visual.stop().fadeOut();
		visual.eq(i).stop().fadeIn();
		btn.removeClass("on");
		tg.addClass("on");
		
	});

	/* click scroll event */
	$("#aside li a").click(function(event){
		event.preventDefault();
		$(this).removeClass("on");
		$("#aside li a").eq(cnt).addClass("on");
        $('html, body').animate({scrollTop: '+=917px'}, 800);
    });
	$("#aside li.on").click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0},800);
	});
});