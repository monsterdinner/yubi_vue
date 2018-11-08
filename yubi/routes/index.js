const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM xz_index_product
  where seq_recommended!=0
  order by seq_recommended`;
  pool.query(sql,[],(err,result)=>{
    if(err)
      console.log(err);
    setTimeout(function(){
      res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"http://localhost:8080"
      })
      res.write(JSON.stringify(result))
      res.end();
    },3000)
  })//访问http://localhost:3000/index.html
})  //会看到花括号！

module.exports=router;