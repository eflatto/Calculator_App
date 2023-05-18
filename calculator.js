const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res)=>{
    res.send("thanks for posting");

});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
