const express = require('express');
const routes = require("../backend/routes/routes")

const app = express();

app.use(express.json());
app.use(routes)

app.get("/teste", (req,res) =>{
    return res.json('Hello')
 })


app.listen(5000, () => console.log('Server up in 5000') );