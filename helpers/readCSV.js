const fs = require('fs')
const origin = fs.readFileSync('./fileToRead/IP2LOCATION-LITE-DB1.csv')

module.exports.prepareIpData = () => {
    const array = origin.toString().split('\n').map(string => {
        return string.split('"').join('')
    })
    return array
}




