const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Node Mama");
});

app.listen(port,()=>{
    console.log('Lising to port ',port);
})
