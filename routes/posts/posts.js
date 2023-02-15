const router = require("express").Router()
const db = require("../../comect")


router.get("/:id", async(req,res)=>{
    try{
    await db.query("select * from posts where id=?",[req.params.id],(err,data)=>{
        if(err) res.send(err) 
        if(!data.length){
            res.send("post not found")
            return;
        }
        res.send(data)
    })
      }catch(e){console.log(e.messge)}
})


router.delete("/:id",async(req,res)=>{
    try{
        await db.query("delete from posts where id =?",[req.params.id],(err,data)=>{
          if(err) res.send(err)
          if(!data.length){
            res.send("not found")
            return;
          }
          res.send(data)
        })
    }catch(e){console.log(e.messge)}
})
module.exports = router 