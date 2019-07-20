//楼层滚动
$(()=>{
    $(window).scroll(()=>{
        var scrollTop=$(window).scrollTop();
        var offsetTop=$(".rgtime").offset().top;
        //console.log(offsetTop);//1064
        if(offsetTop<=scrollTop){
            $(".main_left_aside").show();
        }else{
            $(".main_left_aside").hide();
        }
        var $floors=$(".floor_title");
        console.log($floors);
        for(var i=0;i<$floors.length;i++){
            var $f=$($floors[i]);
            console.log($f.offset().top);//1325
            console.log(scrollTop);
            console.log(innerHeight);
            if($f.offset().top>scrollTop+innerHeight/5){//offset().top表示元素到顶部的距离；scrollTop表示滚轮滑动的距离；innerHeight窗口高度；
                break;
            }
        }
       // console.log(i);
        $(`.main_left_aside>ul>li:eq(${i})`)//添加绿色背景图
            .addClass("left_aside_on")
            .siblings().removeClass("left_aside_on")
    });
$(".main_left_aside>ul").on("click","a.left_aside_btn",function(){
        var $a=$(this);
        var i=$a.parent().index();
        if(i<9) {
            var offsetTop = $(`.floor_title:eq(${i})`).offset().top;
        }
        else if(i==9){
           var  offsetTop=0;
          //console.log(offsetTop)

        }
        $("html").stop(true).animate({
            scrollTop:offsetTop
        },500)
    })
});
/*js效果动画*/
$(()=>{
    var $change=$(".change");
    $change.load(function(){
        $change.addClass("change_on");
    })
});