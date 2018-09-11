$(document).ready(function(e){
    //마우스오버시
    $("article").mouseover(function(){
        $(this).stop().animate({"width":"35%"},1000,function(){
            
            var vid = $(this).find("video").get(0);
            //변수 vid에 video요소를 할당
            vid.currentTime = 0;//동영상의 재생위치를 처음(0)으로 설정
            vid.play();//동영상 재생
            
            //넓이 값을 35%로 1초에 걸쳐 모션을 걸어줍니다.
            //article 이 넓어진 바로 뒤에 아래 구문이 실행
            $(this).find("h3").stop().animate({"right":"10px"},400);
            $(this).find("p").stop().animate({"right":"10px"},800);
            //article이 넓어진 직후에 해당 요소의 h3과 p태그가 나타나야 하므로 callback구문으로 right값을 각각 10px로 설정한 뒤, 약간의 시간차를 주기위해 속도를 다르게 설정
            
        });
       
        $(this).find("video").stop().animate({"opacity":"0.9"},1200);
        //해당 article 요소를 기준으로 video태그를 찾은뒤 1.2초에 걸쳐 투명도를 0.9로변경 
    });
    //마우스 아웃시 
    $("article").mouseout(function(){
        
        var vid = $(this).find("video").get(0);
        vid.pause();//동영상 정지
        
        $(this).stop().animate({"width":"12%"},700);
        $(this).find("video").stop().animate({"opacity":"0"},1000);
        //다시 원래의 형태로 되돌리기 위한 mouseout이벤트
        $(this).find("h3").stop().animate({"right":"-310px"},200);
        $(this).find("p").stop().animate({"right":"-310px"},400);
        //마우스가 벗어났을 시에 해당 요소를 바로 초기화 시키기 위해 callback 이 아닌 일반 .animate()구문에서 설정하여 오른쪽으로 밖으로 위치시켜줍니다.
    });
});