import React, { Component } from 'react';
import axios from 'axios';
import '../styles/WeatherDisplay.css';

class WeatherDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: 'wi-day-sunny',
            loading: false
        }
    }
    componentDidMount(){
        var dict = {
            '01d': 'wi-day-sunny',
            '02d': 'wi-day-cloudy',
            '03d': 'wi-cloud',
            '04d': 'wi-cloudy',
            '09d': 'wi-showers',
            '10d': 'wi-day-rain-mix',
            '11d': 'wi-thunderstorm',
            '13d': 'wi-snow',
            '50d': 'wi-fog',
            '01n': 'wi-night-clear',
            '02n': 'wi-night-alt-cloudy',
            '03n': 'wi-night-alt-cloudy-high',
            '04n': 'wi-cloudy',
            '09n': 'wi-night-alt-sprinkle',
            '10n': 'wi-night-alt-showers',
            '11n': 'wi-night-alt-thunderstorm',
            '13n': 'wi-night-alt-snow',
            '50n': 'wi-night-fog'
          };
        //const defaultQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7108&lon=-74.0108&exclude=minutely,hourly,daily,alerts&appid=7ec98d0ba5a7f5ee79130f54113fdc93"
        let customQuery = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,daily,alerts&appid=7ec98d0ba5a7f5ee79130f54113fdc93";
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
        const success = (pos) =>{
            var crd = pos.coords;
           
            customQuery = customQuery
                .replace('{lat}',`${crd.latitude}`)
                .replace('{lon}',`${crd.longitude}`)
            try{
                axios
                    .get(customQuery)
                    .then(res=>{
                        const data = res.data;
                        this.setState({
                            loading: false,
                            weather: dict[data.current.weather[0].icon]
                        })
                    })
            }catch{

            }
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        this.setState({
            loading: true
        });
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
    render(){
        const { weather, loading} = this.state;
        let fontColor = 'yellow';
        switch(weather){
            case 'wi-day-sunny':
            case 'wi-day-cloudy':
                fontColor = 'yellow';
                break;
            case 'wi-cloud':
            case 'wi-cloudy':
                fontColor = 'lightgrey';
                break;
            case 'wi-showers':
            case 'wi-day-rain-mix':
            case 'wi-thunderstorm':
                fontColor = 'lightskyblue';
                break;
            case 'wi-snow':
                fontColor = "whitesmoke"
                break;
            case 'wi-fog':
                fontColor = 'Gainsboro';
                break;
            case 'wi-night-clear':
            case 'wi-night-alt-cloudy':
            case 'wi-night-alt-cloudy-high':
                fontColor = 'midnightblue';
                break;
            case 'wi-night-alt-sprinkle':
            case 'wi-night-alt-showers':
            case 'wi-night-alt-thunderstorm':
                fontColor = 'steelblue';
                break;
            case 'wi-night-alt-snow':
                fontColor = 'gray';
                break;
            case 'wi-night-fog':
                fontColor = 'lightslategrey';
                break;
            default:
        }
        if(loading)
            return(
                <i className={`wi ${weather}`} style={{color:fontColor}}></i>
            );
        return(
            <i className={`wi ${weather}`} style={{color:fontColor}}></i>
        );
    }
}

export default WeatherDisplay;