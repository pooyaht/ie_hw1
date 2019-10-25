const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
 
const inside = require('point-in-polygon');

const file = path.join(rootDir,'polygons.json');

const fs = require('fs');

router.get('/testpoint', (req, res, next) => {
  let x=req.query.x;
  let y=req.query.y;
  let coordinates= [x,y];
  const myPromise = new Promise((resolve,reject)=>{
  fs.readFile(file,(err,content)=>{
      if(!err){
       let polygonsname=[];
       let polygons = JSON.parse(content);
       //console.log(polygons);
       polygons.forEach(element => {
       // console.log(coordinates,inside(coordinates,element.features[0].geometry.coordinates[0]));
         if(inside(coordinates,element.features[0].geometry.coordinates[0])){
          // console.log('ddd');
            polygonsname.push(element.features[0].properties.name);
          }
       });
      // console.log(polygonsname);
       resolve(polygonsname)
      }
      else{
       resolve('add a polygon first!')
      }
    })
  })
  myPromise.then(value=>{
    getArray(value);
  })
  function getArray(array){
  //  console.log(array);
    res.send(array);
  }
});
module.exports = router;
