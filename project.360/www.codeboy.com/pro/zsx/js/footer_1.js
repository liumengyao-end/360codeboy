/**
 * Created by Tarena on 2018/1/9.
 */
/*
(()=>{
    $(".footer").load("http://www.codeboy.com/pro/zsx/js/footer.html");
})();*/
/*(()=>{
    ajax({
        type:"get",
        url:"http://www.codeboy.com/pro/zsx/js/footer.html"
    }).then(html=>{
        document.getElementsByClassName("footer")[0].innerHTML=html;

    })
})();*/
$(()=> {
    $(".footer").load(
        "http://www.codeboy.com/pro/zsx/js/footer.html"
    )
});
