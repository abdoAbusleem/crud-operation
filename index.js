const express = require("express")
const app = express();
const cors = require("cors");
const postsRoute = require("./routes/posts/posts")

app.get("",(req,res)=>{
    res.send("web is running")
})


app.use(express.json())

app.use("/",postsRoute)
app.use(cors()); 



app.listen(5400,()=>{
    console.log("server is running in port 5400")
})
