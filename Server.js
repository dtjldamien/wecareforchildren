var express = require('express');
var app = express();
var sql = require("mssql");
app.get('/', function (req, res) {



    // config for your database
    var config = {
        user: 'root',
        password: 'plata0PLOMO',
        server: 'localhost',
        database: 'hackathon'
    };

    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query("")
    }).then(result => {
        let rows = result.recordset
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        sql.close();
    }).catch(err => {
        res.status(500).send({ message: "${err}" })
        sql.close();
    });

    console.log("trying to connect")
    sql.connect(config).then(() => {
        console.log("connected")
        return 1
    }).then(result => {
        console.log(result)
    }).catch(err => {
        // ... error checks
    })

    // connect to your database
    /*
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });*/
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
