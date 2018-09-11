 $(document).ready(function (e) {
     $(".l-arrow").click(function () {
         $(".imggalley>.img").prepend($(".imggalley>.img>div").last());

     });
     $(".r-arrow").click(function () {
         $(".imggalley>.img").append($(".imggalley>.img>div").first());

     });

     //헤더영역
     
     $(window).scroll(function(e){
        var winTop = $(this).scrollTop();
        var resTop = $(".reservation").offset().top;
        //console.log(resTop);
         if(winTop>resTop){
            $("header").css("background-color","#fff")
        }else{
            $("header").css("background-color","transparent")
        }
     });
     
 });

$(document).ready(function(e) {
    var modal = $(".modal").get(0);

	$(".leisure_img > a").on("click",function(){
		var imglink=$(this).attr("href");
        var txt = $(this).attr("data-text");
        console.log(imglink)
        $(".modal").find("img").attr("src",imglink)
        $(".modal").find("p").text(txt);
        $(".modal").css({"display":"block"});
        return false;
	});
	
	$(".modal .close").on("click",function(){
		$(".modal").css({"display":"none"});	
	});
	$(window).on("click",function(e){
		if(e.target == modal){
			$(".modal").css({"display":"none"});
			
		}	
	});
	
});