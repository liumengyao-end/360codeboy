//轮播图
/*$(()=>{
    var LIWIDTH=1904,timer=null,moved=0,duration=500,wait=3000;
    $.get("http://www.codeboy.com/pro/zsx/js/data/getCarousel.php").then(data=>{
        var html="";
        for(var p of data){
            html+=`<li>
				  <a href="${p.href}" title="${p.title}">
					<img src="${p.img}">
				  </a>
              </li>`
        }
        var p0=data[0];
        html+=`<li>
				  <a href="${p0.href}" title="${p0.title}">
					<img src="${p0.img}">
				  </a>
              </li>`

        var $ul=$("[data-load=bannerImgs]");
        $ul.html(html).css("width",LIWIDTH*(data.length+1));



        var $ulInds=$("[data-load=bannerInds]");
        $ulInds.html("<li></li>".repeat(data.length)).children().first().addClass("hover");
        function move(){

            $ul.animate({
                left:-LIWIDTH*moved
            },duration,function(){
                if(moved==6){
                    moved=0;
                    $ul.css("left",0);
                }
                $ulInds.children(`:eq(${moved})`).addClass("hover").siblings()
                    .removeClass("hover");
            })
        }

        var timer=setInterval(()=>{
            moved++;move();


        },wait+duration);
        $ulInds.on("mouseover","li",e=>{
            moved=$(e.target).index();

            clearInterval(timer);
            $ul.stop(true);

            move();
        });
        $("#banner").hover(
            ()=>
                clearInterval(timer),
            ()=>timer=setInterval(()=>{
                moved++;move();
            },wait+duration)
        );
        $("[data-move=right]").click(()=>{
            if(!$ul.is(":animated")){
                moved++;
                move();
            }
        })
        $("[data-move=left]").click(()=>{
            if(!$ul.is(":animated")){
                if(moved==0){
                    $ul.css("left",-LIWIDTH*data.length);
                    moved=6;
                }
                moved--;
                move();
            }
        })
    });
});*/
/*$(()=>{
    var LIWIDTH=1904,
        timer=null,
        moved=0,
        duration=500,
        wait=3000;
    $.ajax({
        type:"get",
        url:"http://www.codeboy.com/pro/zsx/js/data/getCarousel.php"
    }).then(data=>{
        //console.log(data);
        var html="";
        for(var p of data){
            html+=`<li><a href="${p.href}" title="${p.title}">
					<img src="${p.img}">
			</a></li>`
        }
        var p0=data[0];
        html+=`<li><a href="${p0.href}" title="${p0.title}">
				<img src="${p0.img}">
		</a></li>`
        var $ul=$("[data-load=bannerImgs]")
        $ul.html(html).css("width",LIWIDTH*(data.length+1));

        setInterval(()=>{
            moved++;
            $ul.animate({
                left:-LIWIDTH*moved
            },duration,function(){
                if(moved==5){
                    moved=0;
                    $ul.css("left",0);
                }
            })
        },wait+duration)
    });
});*/

//shake的6张轮播图
(()=>{
    var i=1,canShake=true;
    function shake(){
        if(canShake==true){
            canShake=false;
            if(i==5)i=1;
            else i++;

            var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            arr.sort((a,b)=>Math.random()<0.5?1:-1);
            arr.sort((a,b)=>Math.random()<0.5?1:-1);
            arr.sort((a,b)=>Math.random()<0.5?1:-1);

            var j=0;
            setInterval(()=>{
                $(`#box>div:eq(${arr[j++]})`).css(
                    "backgroundImage",
                    `url(img/index/${i}.jpg)`
                ).addClass("shake");
            },50);
            setTimeout(()=>{
                $("#box>div").removeClass("shake");
                $("#box>img").attr("src",`img/index/${i}.jpg`);
                canShake=true;
            },1000);
        }
    }
    setInterval(shake,3000);
//	$("#btnNext").click(shake);
})()
//二级标题
$(()=>{
   $(".menu_list li").on("mouseenter",function(){
       $(this).children(".index_second").show();
       $(this).parent().siblings().children(".index_second").hide();
       var $a=$(this).children().children(".second_title_list");
       var $b=$(".second_title_list");
       for(var  i=0;i<$b.length;i++) {
           $b[i].setAttribute("data-fid",i+1);
       }
       for(let  i=0;i<$a.length;i++) {
           var fid = $a[i].getAttribute("data-fid");
           //console.log(fid);
           if(fid==fid) {
               $.ajax({
                   type: "get",
                   url: "http://www.codeboy.com/pro/zsx/js/data/get_menu.php",
                   data: {fid},
                   success: function (data) {
                     //  console.log(data);
                       //return data;
                       //   for(var i=0;i<$b.length;i++) {
                    //   console.log($a[i]);
                       var html ="";
                       for (let k of data) {
                           html += `<a class="second_title_a">
                          <img src="${k.img}" alt="">
                          <span>${k.fname}</span>
                       </a>`;
                       }
                       //console.log(html);
                     //  $a[i].html(html);
                       $a[i].innerHTML=html;
                   },
                   error: function () {
                       alert("网络故障");
                   }
               });

           }
       }
});
    $(".menu_list li").on("mouseleave",function(){
        $(this).children(".index_second").hide();
    })
});
//楼层滚动
$(()=>{
    $(window).scroll(()=>{
        var scrollTop=$(window).scrollTop();
        var offsetTop=$(".activity").offset().top;
        if(offsetTop<=scrollTop){
            $(".main_left_aside").show();
        }else{
            $(".main_left_aside").hide();
        }
        var $floors=$(".floor_title");
        for(var i=0;i<$floors.length;i++){
            var $f=$($floors[i]);
            if($f.offset().top>scrollTop+innerHeight/5){
                break;
            }
        }
       // console.log(i);
        $(`.main_left_aside>ul>li:eq(${i-1})`)
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
//广告定时器
$(()=>{
    $(".ad").append("<img src='img/index/1.jpg'/*tpa=http://www.codeboy.com/pro/zsx/js/img/index/1.jpg*/>");

  var timer=setInterval(function () {
      $(".ad").css("height","420px").slideUp(2000,function () {
          clearInterval(timer);
          $(".ad").css("height","80px").slideDown(1000);
          $(".ad img").attr("src","img/aaaa.jpg"/*tpa=http://www.codeboy.com/pro/zsx/js/img/aaaa.jpg*/);
      });
 },3000);

 /*,function () {

       $(".ad img").attr("src","../../../../172.163.200.1/disable/disable.htm-url_type=访问网站-未分类&plc_name=deny any"/*tpa=http://img.i360mall.com/bf66bfac-c894-42fd-8e93-fe0b0a452f9f.jpg*/);
       $(".ad").css("height","80px").slideUp();
       clearInterval(timer);
   });*/



});
//滚动楼层屏幕宽度问题
$(()=>{
    var clientWidth=document.body.clientWidth;
    if(clientWidth>1700){
       $(".main_left_aside").css("left","13%")
    }else if(1400<clientWidth<1700){
       $(".main_left_aside").css("left","5%")
    }else{
       $(".main_left_aside").css("left","3%")
    }
});
//限时秒杀倒计时
$(()=>{
        function countTime() {
            //获取当前时间
            var date = new Date();
            var now = date.getTime();
            //设置截止时间
            var endDate = new Date("2018-3-10 23:23:23");
            var end = endDate.getTime();
            //时间差
            var leftTime = end-now;
            //定义变量 d,h,m,s保存倒计时的时间
            var d,h,m,s;
            if (leftTime>=0) {
                d = Math.floor(leftTime/1000/60/60/24);
                h = Math.floor(leftTime/1000/60/60%24);
                m = Math.floor(leftTime/1000/60%60);
                s = Math.floor(leftTime/1000%60);
            }
            //将倒计时赋值到div中
          /*  document.getElementById("_d").innerHTML = d;
            document.getElementById("_h").innerHTML = h;
            document.getElementById("_m").innerHTML = m;
            document.getElementById("_s").innerHTML = s;*/
            if(s<10){

                $("#_s").html('0'+s);
            }else{
                $("#_s").html(s);
            }
            if(h<10){

                $("#_h").html('0'+h);
            }else{
                $("#_h").html(h);
            }
            if(m<10){

                $("#_m").html('0'+m);
            }else{
                $("#_m").html(m);
            }

            //递归每秒调用countTime方法，显示动态时间效果
            setTimeout(countTime,1000);
        }
    countTime();
});
//楼层信息（左边）
$(()=>{
    $.ajax({
        type: "get",
        url: "http://www.codeboy.com/pro/zsx/js/data/getFloor.php",
        data: {},
        success: function (data) {
             // console.log(data);
            var html ="";
            for (var k of data) {
                html += `
          <div id="getFloor">
                           <div class="floor_title">
                            <h2>${k.title}</h2>
                         </div>
        <div class="floor_first">
        <div class="first_box clear">
            <div class="first_left">
                <a href="#" class="first_gm"><img src="${k.bigimg}" alt=""></a>
                <a href="#" class="first_sm"><img src="${k.smallimg}" alt=""></a>
            </div> 
            <div class="first_right" >
                <ul class="first_right_box" data-lid="${k.lid}">
                 </ul>
            </div>    
        </div>
    </div>
    </div>
`;
   }
            $(".main").append(html);
      /*      var oFirst_right=$(".first_right");
            window.onscroll = function() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if ( getTop( oFirst_right ) + oFirst_right.offsetHeight < document.documentElement.clientHeight + scrollTop ) {
                    var lid=oFirst_right.data("lid");
                    $.ajax({
                        type: "get",
                        url: "http://www.codeboy.com/pro/zsx/js/data/getFloorProduct.php",
                        data: {lid},
                        success: function (data) {
                            console.log(data);

                            //   for(var i=0;i<$b.length;i++) {
                            //   console.log($a[i]);
                            var html ="";
                            for (var m of data) {
                                html += `
            <li>
                <a href="#">
                    <div class="first_img">
                        <img  src="${m.img}" alt="">
                    </div>
                    <h5 class="first_title">
                        ${m.title}</h5>
                    <p class="first_price">￥${m.price}.00</p>
                </a>
            </li>
`;
                            }
                            $(".first_right_box").html(html);
                        },
                        error: function () {
                            alert("网络故障");
                        }
                    });
                }
            }
            function getTop(obj) {
                var iTop = 0;
                while(obj) {
                    iTop += obj.offsetTop;
                    obj = obj.offsetParent;
                }
                return iTop;
            }*/
            let first_right_box=$(".first_right_box");
            for(let n=0,len=first_right_box.length;n<len;n++){
              //  console.log(n+1);
                let lid=first_right_box.eq(n).data("lid");
              //  console.log(lid);
                    $.ajax({
                        type: "get",
                        url: "http://www.codeboy.com/pro/zsx/js/data/getFloorProduct.php",
                        data: {lid},
                        success: function (data) {
                            //console.log(data);
                            var htmla = "";
                            for (var m of data) {
                                htmla += `
            <li>
                <a href="http://www.codeboy.com/pro/zsx/js/product_detail.html?rid=${m.rid}" id="liRid">
                    <div class="first_img">
                        <img  style="width:150px;height:150px;" src="${m.img}" alt="">
                    </div>
                    <h5 class="first_title">
                        ${m.title}</h5>
                    <p class="first_price">￥${m.price}.00</p>
                </a>
            </li>    
`;
                            }
                            //console.log(n);
                            $(".first_right_box").eq(n).html(htmla);
                        },
                        error: function () {
                            alert("网络故障");
                        }
                    });
            }
        },
        error: function () {
            alert("网络故障");
        }
    });
/*    window.onscroll = function() {

        var _index = getShort();
        var oLi = aLi[_index];

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if ( getTop( oLi ) + oLi.offsetHeight < document.documentElement.clientHeight + scrollTop ) {

            if ( b ) {
                b = false;
                iPage++;
                getList();
            }

        }

    }
    */

  /*  function getTop(obj) {
        var iTop = 0;
        while(obj) {
            iTop += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return iTop;
    }
    console.log(getTop($(".first_box")));*/
});
//右边固定
$(()=>{
  $(".wechatTip>img").mouseover(function () {
      $(this).next().show();
  })
    $(".wechatTip>img").mouseout(function () {
        $(this).next().hide();
    })
    $(".storeTip>img").mouseover(function () {
        $(this).next().show();
    })
    $(".storeTip>img").mouseout(function () {
        $(this).next().hide();
    })
});


