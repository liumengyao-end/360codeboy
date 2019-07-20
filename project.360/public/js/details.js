(function(){
//indeX_phone_tongxun
  $.ajax({
    url:"http://localhost:3000/details/tongxun",
    type:"get",//请求类型
    dataType:"json"
  }).then(function(res){
    console.log(res);
    //先获取父元素
    var $first=$(".title_first");
   
    //先定义空的html
    var html="";
 
    //循环生成html片段
    for(var item of res){
      html+=`
       <a href="#">
         <img src="${item.href}" alt="">
         <span>${item.pname}</span>
       </a>
      `;
    }
    $first.html(html); 
  });

//index_phone_peijian
  $.ajax({
    url:"http://localhost:3000/details/peijian",
    type:"get",//请求类型
    dataType:"json"
  }).then(function(res){
   // console.log(res);
    //先获取父元素
    var $second=$(".title_second");
    //先定义空的html
    var html1="";
    //循环生成html片段
    for(var item of res){
      html1+=`
      <a href="#">
        <img src="${item.ahref}" alt="">
        <span>${item.aname}</span>
      </a>
     `;
    }
    $second.html(html1);
  });

//index_phone_ershou
  $.ajax({
    url:"http://localhost:3000/details/ershou",
    type:"get",
    dataType:"json"
  }).then(function(res){
    console.log(res);
    var $third=$(".title_third");
    var html2="";
    for(var item of res){
      html2+=`
      <a href="#">
        <img src="${item.bhref}" alt="">
        <span>${item.bname}</span>
      </a>`;
    }
    $third.html(html2);
  });
//index_miaosha

$.ajax({
  url:"http://localhost:3000/details/miaosha",
  type:"get",
  dataType:"json",
}).then(function(res){
  console.log(res);
  var $miaosha=$(".activty_list");
  var html3="";
  for(var item of res){
    html3+=`
    <li>
      <a href="#">
        <img src="${item.mhref}" alt="">
        <h5>${item.mname}</h5>
        <p class="list-price">${item.mprice}<em>${item.sprice}</em></p>
      </a>
    </li> `
  }
  $miaosha.html(html3);
})


})()