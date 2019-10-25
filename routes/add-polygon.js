const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const file = path.join(rootDir,'polygons.json');

const fs = require('fs');

const _ = require('underscore')

let polygons = [];
router.post('/addpolygon', (req, res, next) => {
 // console.log(req.body.features[0])
  fs.readFile(file,(err, content)=>{
   const data = req.body;
    if(!err){
      polygons = JSON.parse(content);
    }
    polygons.push(data);
   // console.log(data);
  //  console.log('*****************************');
    polygons = _.uniq(polygons,(object)=>{
       // console.log(object.features[0]);
        let temp = object.features[0].geometry.coordinates[0];
        return JSON.stringify(temp)   
    } )
    //console.log(polygons);
    fs.writeFile(file,JSON.stringify(polygons),()=>{})
  })
  res.send();
});
module.exports.router = router;
