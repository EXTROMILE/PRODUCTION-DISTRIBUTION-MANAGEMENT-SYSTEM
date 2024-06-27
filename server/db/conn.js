const mysql = require("mysql2");

const conn = mysql.createConnection({

    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE

});

// connection

conn.connect((err) => {
    if(err)
        throw err;
    console.log("DB Connected");
})

module.exports = conn;