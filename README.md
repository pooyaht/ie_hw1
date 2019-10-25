# ie_hw1
# add polygon works with POST request and you should set content-type header to application/json in your request and copy json file content to the body
# link to heroku : https://pure-garden-40040.herokuapp.com  
# sample input file  
<pre>
[  
  {"type":"FeatureCollection",  
   "features":[  
{     "type":"Feature",  
       "properties":{  
          "stroke":"#555555",  
          "stroke-width":2,  
          "stroke-opacity":1,  
          "fill":"#555555",  
          "fill-opacity":0.5,  
          "name":"[tehran,mantaghe3]"  
          },  
      "geometry":{
            "type":"Polygon",
            "coordinates":[
               [
                [30.05859375,
                55.47885346331034],
                [49.6142578125,
                55.47885346331034],
                [49.6142578125,
                62.61356210229029],
                [30.05859375,
                62.61356210229029],
                [30.05859375,
                55.47885346331034]]]}}]},{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "kerman"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              46.285400390625,
              62.15010880970039
            ],
            [
              44.912109375,
              59.153403092050375
            ],
            [
              51.9873046875,
              60.52215754533236
            ],
            [
              46.8896484375,
              63.29293924364835
            ],
            [
              46.285400390625,
              62.15010880970039
            ]
          ]
        ]
      }
    }
  ]
}]
</pre>
# test inputs:  
            https://pure-garden-40040.herokuapp.com/GIS/testpoint?x=51.2402&y=60.6085
            https://pure-garden-40040.herokuapp.com/GIS/testpoint?x=45.7910&y=59.7343
            https://pure-garden-40040.herokuapp.com/GIS/testpoint?x=39.1553&y=58.1939
# outputs:
            ["kerman"]
            ["[tehran,mantaghe3]","kerman"]
            ["[tehran,mantaghe3]"]
# artillery command:
                artillery quick --count 1000 -n 20 https://pure-garden-40040.herokuapp.com/GIS/testpoint
                This command will create 1000 "virtual users" each of which will send 20 HTTP GET requests
# artillery result:
<pre>
All virtual users finished
Summary report @ 17:18:38(+0330) 2019-10-25
  Scenarios launched:  1000
  Scenarios completed: 394
  Requests completed:  7970
  RPS sent: 77.3
  Request latency:
    min: 198.4
    max: 69254.3
    median: 390.2
    p95: 9315.5
    p99: 35919
  Scenario counts:
    0: 1000 (100%)
  Codes:
    200: 7970
  Errors:
    ETIMEDOUT: 576
    ECONNRESET: 30
    </pre>
            
