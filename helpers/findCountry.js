const ipArguments = require('./readCSV')

module.exports.findCountry = (toFind) => {
    let result;
    const listOfAll = ipArguments.prepareIpData()
    for (let i = 0; i < listOfAll.length;) {
        if (listOfAll[i].split(',')[0] < toFind){
            (toFind - listOfAll[i].split(',')[0] > 5000) ? i+= 500 : i++
        }
        if(listOfAll[i].split(',')[0] > toFind){
            i--
        }
        if((listOfAll[i].split(',')[0] < toFind) && (listOfAll[i].split(',')[1] > toFind)){
            result = listOfAll[i]
            break;
        }
    }
    return result
}