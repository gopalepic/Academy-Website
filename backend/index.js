const express = require('express');
const fs = require('fs');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors())

app.get('/',(req,res)=>{
  fs.readFile('./public/data/text.txt','utf8',(err,data) => {
    if(err){
      console.log(err);
      res.status(500).send({message:'Error reading files'})
    }else{
      res.send({data})
    }
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});