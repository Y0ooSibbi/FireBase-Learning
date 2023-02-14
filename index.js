const express =require('express');
const cors =require('cors');
const User =require('./config');
const app =express();
app.use(express.json());
app.use(cors());

app.get("/",async (req,resp)=>{
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc)=>
        doc.data()
    )
    resp.send(list);
})
app.post("/create",async (req,resp)=>{
    const data = req.body;
    await User.add({data});
    console.log(data);
    resp.send(`Your message is ${data}`);
})

app.listen(5001,()=>{
    console.log("running on port 5000");
})