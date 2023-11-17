import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
    const [dataWeather, setDataWeather] = useState({})

    const api_key = import.meta.env.VITE_MY_API_KEY

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response => {
            const { temperature, weather_icons, wind_speed, wind_dir } = response.data.current
            setDataWeather({
                temperature,
                weather_icons,
                wind_speed,
                wind_dir
            })
        } )
    }, [api_key, capital])

    console.log(dataWeather);
    return (
        <div>
            <h3>Weather in {capital}</h3>
            <div>
                <b>temperature</b> {dataWeather.temperature} Celcius
            </div>
            <img src={dataWeather.weather_icons} alt='' />
            <div>
                <b>Wind</b> {dataWeather.wind_speed} direction {dataWeather.wind_dir}
            </div>
        </div>
    )
}

export default Weather;