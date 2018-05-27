const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.listen(port);

app.get("/api/version",(req,res)=>{
    res.send(`
    <html>
    <body>
    <h1>Hello!!!!! </h1>
    </body>
    </html>
    `)
})

app.get("/api/version1",(req,res)=>{
    res.send(
    {
        "name":"RK Iyer"
    }
    )
})


