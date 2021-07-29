exports.getPrivateData = (req, res, next) => {
  res.status(200).send({
    success: true,
    data: 'very secret data!',
    user: req.user
  })
}