const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e5e990e81ace54c8aed2fab44389674d&query='+latitude+','+longitude
    request({ url, json: true }, (error, {body}) => {
        if (error){
            callback("Unable to connect to forecast services!", undefined)
        } else if(body.error){
            callback("Unable to find location.", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '°C. It feels like '+body.current.feelslike+ '°C. There is a ' + body.current.precip + '% chance of rain. Current humidity is '+ body.current.humidity + '%.')
        }
    })
}

module.exports = forecast