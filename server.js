const express = require('express');
const app = express();
var c = require('./controller/');
var urlRoutes = require('./route/user')
app.listen(3000, function () {
    console.log('listening on 3000')
})

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes',(req,res) => {
    console.log('POst ne')
    return 'Post ne'
})

app.get('/test', c.UserController.getUser);
// router
app.use('/users', urlRoutes);
