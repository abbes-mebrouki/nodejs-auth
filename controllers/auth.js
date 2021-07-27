exports.register = (req, res, next) => {
    res.send('this is register route')
}

exports.login = (req, res, next) => {
    res.send('this is login route')
}

exports.forgotPassword = (req, res, next) => {
    res.send('this is forgotPassword route')
}

exports.resetPassword = (req, res, next) => {
    res.send('this is resetPassword route')
}