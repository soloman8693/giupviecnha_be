function getUser(req,res) {
    console.log('ALoALo')
    return res.status(200).json({
        message: 'alo hoa ne'
    })
}

module.exports = {getUser}
