const express = require('express');
const app = express();
const swagger = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
var c = require('./controller/');
var urlRoutes = require('./route/user');
var employeeRoute = require('./route/employee');
const bodyParse = require('body-parser');
app.listen(3000, function () {
    console.log('listening on 3000')
})
// config swagger
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('POst ne')
    return 'Post ne'
})

app.get('/test', c.UserController.getUser);
// router
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use('/users', urlRoutes);
app.use('/employee', employeeRoute);
