function getUser(req,res) {
    console.log('ALoALo')
    return res.status(200).json({
        message: 'alo'
    })
}

module.exports = {getUser}
