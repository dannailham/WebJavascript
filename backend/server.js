// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database: "crud_db"
// })


// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM login WHERE email = ? AND password = ? ";
//     const values = [
//         req.body.email,
//         req.body.password
//     ]

//     db.query(sql, [values],(err, data) => {
//         if(err){
//             return res.json("Error")
//         }
//         if(data.length > o) {
//             return res.json("Success");
//         } else {
//             return res.json("failure");
//         }
//     })
// })

// app.listen(5000, () =>{
//     console.log("listening");
// })

// export default server;