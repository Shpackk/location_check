const findContry = require('../helpers/findCountry')
const {performance} = require('perf_hooks')

module.exports.checkLocation = (req,res) => {
    const timeNow = performance.now()
    const userIp = req.header('x-forwarded-for') || req.connection.remoteAddress || req.ip
    try {
      const splitedIp = userIp.split('.')
      const convertedIp = (splitedIp[0] * 16777216) + (splitedIp[1] * 65536) + (splitedIp[2] * 256) + splitedIp[3] * 1
      const userGeo = findContry.findCountry(convertedIp)
      res.send({
        location: userGeo.split(',')[2] + ',' + userGeo.split(',')[3],
        userIp,
        convertedIp
      })
      const timeEnd = performance.now()
      console.log(timeEnd - timeNow)
    } catch (error) {
      console.log(error)
    }
}