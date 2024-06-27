// express app created
require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");


const port = 8001;

// server start
// app.get("/",(req,res) => {
//     res.send("Server Start")
// });
// middle ware
app.use(express.json());
app.use(cors());

app.use(router);


// app start on port number
app.listen(port, () => {
    console.log("Server start at port number :" + port);
})
// const conn = mysql.createConnection({

//     user:process.env.DB_USER,
//     host:process.env.DB_HOST,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_DATABASE

// });


// app.post("/create", (req,res)=>{
//     const {
//         model,
//         jsr,
//         lkw,
//         ckdliv,
//         pune,
//         spd,
//         lkoadv,
//         puneadv,
//         totalrequired,
//         micoprod,
//         micobal,
//         excw,
//         expin,
//         totcw,
//         totpin,
//       } = req.body;

      
//         conn.query('INSERT INTO users SET ?', userData, (err, result) => {
//             if (err) {
//              ({ error: 'Database error' });
//             }
      
//             req.send("got data");
//           });
//         });
      
      
//       // Get user data
//       router.get('/getusers', (req, res) => {
//         conn.query('SELECT * FROM users', (err, result) => {
//           if (err) {
//             console.log({ error: 'Database error' });
//           }
      
//            res.send(result);
//         });
//       });
      
