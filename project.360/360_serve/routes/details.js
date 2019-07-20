const express=require("express")
const router=express.Router();
const pool=require("../pool")
//轮播图左侧导航栏
//1
router.get("/peijian",(req,res)=>{
  var sql=`SELECT * FROM index_phone_peijian ORDER BY aid ASC`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err)
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
//2
router.get("/tongxun",(req,res)=>{
  var sql=`SELECT * FROM index_phone_tongxun ORDER BY pid ASC`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err)
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
//3
router.get("/ershou",(req,res)=>{
  var sql=`SELECT * FROM index_phone_ershou ORDER BY bid ASC`;
  
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
//显示秒杀

router.get("/miaosha",(req,res)=>{
  var sql=`SELECT * FROM index_miaosha ORDER BY mid ASC`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0})
    }else{
      res.send(result);
    }
  })
})
module.exports=router;