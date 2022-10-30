const express = require("express");
const path = require("path");
const { middleware } = require('./middleware/middleware');
const api = require("./routes/routes")
const PORT = 3001;
const app = express();

app.use(middleware)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",api)

app.use(express.static("public"));

//HTML routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//API routes
// app.get("/api/notes", (req,res)=>{
//     fs.readFile("./db/db.json","utf-8", (err,data)=>{
//         if(err){
//             console.log(err);
//             res.status(500).json({
//                 msg:"uh oh!",
//                 err:err
//             })
//         } else {
//             const dataArr = JSON.parse(data);
//             res.json(dataArr)
//         }
//     })
// })
// app.post("/api/notes", (req,res)=>{
//     fs.readFile("./db/db.json","utf-8",(err,data)=>{
//         if(err){
//             console.log(err);
//             res.status(500).json({
//                 msg:'uh oh!',
//                 err:err
//             });
//         } else{
//             const {title, text } = req.body;

//         }
//     })
// })

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
