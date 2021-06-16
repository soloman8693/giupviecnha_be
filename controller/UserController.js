var dbcon = require('../data/data_connection');

function getUser(req,res) {
    console.log('ALoALo')
    return res.status(200).json({
        message: 'alo hoa ne'
    })
}

function getUsers(req,res) {
    dbcon.query('SELECT * FROM employee', function (err, result, fields) {
        if (err) throw err;
        return res.status(200).json(
            result
        );
    });
}

module.exports = {getUser, getUsers}
