const successful = async (req, res, next) => {
    console.log(res.body)
    next()
}

module.exports = {
    successful
}