/*

(()=>{
    ajax({
            type:"get",
            url:"http://www.codeboy.com/pro/zsx/js/header.html"
        }).then(html=>{
     document.getElementsByClassName("header")[0].innerHTML=html;
	 
})
})();*/
$(()=>{
    $('.header').load('http://www.codeboy.com/pro/zsx/js/header.html',()=>{
        $.ajax({
            url: 'http://www.codeboy.com/pro/zsx/js/data/users/session_data.php',
            success: function(result){
                if(result.uname){
                    $('.login_info').html('<span>'+result.uname+'<a href="http://www.codeboy.com/pro/zsx/js/logout.html" id="logout" title="退出登录">退出</a></span>');



                    $("#logout").click(function(e){
                        e.preventDefault();
                        $.ajax({
                            url:"http://www.codeboy.com/pro/zsx/js/data/users/logout.php",
                            success: function(result){
                                if(result.code==200){
                                            var t=5;//设定跳转的时间
                                            function refer() {
                                                setInterval(function () {
                                                    $(".jump").html(t);
                                                    t--; // 计数器递减
                                                    if(t==0){
                                                        location="http://www.codeboy.com/pro/zsx/js/login.html"; //#设定跳转的链接地址
                                                    }
                                                },1000);
                                            }

                                            $(".suc").show(refer);
                                            $("#button").click(function () {
                                                window.location.href="http://www.codeboy.com/pro/zsx/js/login.html";
                                            })

                                        }
                            }
                        })
                    });
                }
            }
        });

        $("body").on("click","#submit",function () {

            var kw = $("#search_value").val();
            console.log(kw);
            $.ajax({
                type: 'get',
                url: 'http://www.codeboy.com/pro/zsx/js/data/getProductsByKw.php',
                data: {kw},
                success: function (data) {
                    console.log(data);
                    var html1 = '';
                    for (var p of data.data) {
                        html1 += `
                     <li  class="list-item">
                    <dl class="desc">
                        <dt class="pic">
                            <a target="_blank" href="#">
                                <img class="js-lazyload"  src="${p.img}" style="display: block;">
                            </a>
                        </dt>
                        <dd class="cont">
                            <a target="_blank" href="#">

                                            <span class="title">
                                                <em class="smalltip"  style="">秒杀</em>
                                            ${p.title}
                                            </span>
                                <span class="price"><i class="yen">￥</i>${p.price}.00</span>

                            </a>
                        </dd>
                        <dd class="addbtns">

                            <a href="javascript:;" class="gray"  style="display: none">已售罄</a>

                            <a href="javascript:;" class="add-cart"  name="add-cart">加入购物车</a>

                        </dd>
                    </dl>
                    <div class="addSuccess">成功添加至购物车</div>
                </li>
                
        `;
                    }
                    $('#item_list').html(html1);


                }, error: function () {

                }

            })

        })


    });



});




