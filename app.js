const express = require('express');
const port = process.env.EXPRESSTESTPORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.json({
        "reqType": "get",
        "status": res.statusCode
    })
})

app.post("/", (req, res) => {
    res.json({
        "reqType": "post",
        "status": res.statusCode
    })
})

app.put("/", (req, res) => {
    res.json({
        "reqType": "put",
        "status": res.statusCode
    })
})

app.patch("/", (req, res) => {
    res.json({
        "reqType": "patch",
        "status": res.statusCode
    })
})

app.delete("/", (req, res) => {
    res.json({
        "reqType": "delete",
        "status": res.statusCode
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Some error Occured` + err)
    } else {
        console.log(`Express Testing app running on http://localhost:${port}/`)
    }
})