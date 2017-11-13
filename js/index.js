window.onload = function(){
	//swiper配置
	var swiper = new Swiper(".swiper-container",{
		pagination: ".swiper-pagination",
		paginationClickable: false,
		direction: "vertical",
		nextButton: '.swiper-button-next',
		effect : 'fade',
		onInit: function(swiper){
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper);
		}
	});

	//弹出提示正确业务封装
	function clickYes() {
		$(".clickYes").show();
		$(".clickBg div p").html("答对啦!");
		$(".clickBg div i").html("-继续加油喔-");
		$(".click-yb img").attr('src','img/click/click-yuebing.png')
		$(".click-kuang p").html("YES");
		$(".clickBtn p").html("下一题");
	}
	function clickEnd () {
		$(".clickYes").show();
		$(".click-yb img").attr('src','img/click/click-yuebing.png')
		$(".clickBg div p").html("恭喜你!");
		$(".clickBg div i").html("-答对所有题目-");
		$(".click-kuang p").html("wow");
		$(".clickBtn p").html("更多精彩");
	}
	//弹出提示错误业务封装
	function clickNo () {
		$(".clickYes,.baffle").show();
		$(".clickBg div p").html("答错啦!");
		$(".clickBg div i").html("-少年不要灰心再接再厉-");
		$(".click-kuang p").html("NO");
		$(".click-yb img").attr('src','img/click/click-yuebing1.png')
		$(".clickBtn p").html("再来一次");
		
	}
	//点击弹出提示正确
	$(".swiper-slide:eq(2) .pg3-btn1,.swiper-slide:eq(3) .pg3-btn2,"+
	".swiper-slide:eq(4) .pg3-btn2").click(function(){ clickYes(); });
	$(".swiper-slide:eq(5) .pg3-btn1").click(function(){  clickEnd(); })
	//点击弹出提示错误
	$(".swiper-slide:eq(2) .pg3-btn2,.swiper-slide:eq(2) .pg3-btn3,"+ 
	".swiper-slide:eq(3) .pg3-btn1,.swiper-slide:eq(3) .pg3-btn3," + 
	".swiper-slide:eq(4) .pg3-btn1,.swiper-slide:eq(4) .pg3-btn3," +
	".swiper-slide:eq(5) .pg3-btn2,.swiper-slide:eq(5) .pg3-btn3").click(function(){ clickNo(); })

	//点击隐藏弹出
	$(".clickBGBG,.swiper-button-next,.baffle").click(function  () {
		$(".clickYes,.baffle").hide();
	})
	
	//再来一次
	$(".pgend-again").click(function () {
		document.location.reload();
	})
	//分享
	$(".pgend-share").click(function () {
		$(".shareBG").show();
		setTimeout(function () {
			$(".shareBG").hide();
		},2500)
	})
	
	$(".musicbtn").click(function (){ 
		var music = document.getElementById("music"); 
		if(music!==null){//判断是否获得
            if(music.paused){//获得播放状态,这个属性应该是是否是暂停状态,如果是就播放,如果不是暂停就暂停
                music.play();
                $(".musicbtn").addClass("musicRotate");
            }else{
                music.pause();
                $(".musicbtn").removeClass("musicRotate");
            }
        }
	})
}
