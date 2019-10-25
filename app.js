const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

const addPolygonRoutes = require(path.join(rootDir,'routes','add-polygon'));
const testPointRoutes = require(path.join(rootDir,'routes','testpoint'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/GIS',addPolygonRoutes.router);
app.use('/GIS',testPointRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(process.env.PORT || 2000);
