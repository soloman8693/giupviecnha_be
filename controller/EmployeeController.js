var dbcon = require('../data/data_connection');

function getEmployee(req, res) {
    dbcon.query('SELECT * FROM employee', function (err, result, fields) {
        if (err) throw err;
        return res.status(200).json(
            result
        );
    });
}

function add(req, res) {
    console.log(req.body.userId);
    var query = "Insert into employee(userId, description,workingTime, image,hometown,solanthue,rate ) values ?";
    var param = [
        [Number(req.body.userId),
            req.body.description,
            req.body.workingTime,
            req.body.image,
            req.body.hometown,
            req.body.solanthue,
            req.body.rate]
    ];
    dbcon.query(query, [param], function (err, result) {
        if (err) throw err;
        return res.status(200).json(result)
    })
}

module.exports = {getEmployee, add}
