import React, { useState } from "react";
import { contextWeather } from "./Context";
import { api } from "./services/api";

export default function WeatherProvider( { children } ){
    const [loading, setLoading] = useState(false);
    const [weathers, setDataWeather] = useState({});
    const [error, setError] = useState(null);

    // viet luon action tim kiem
    const getDataWeather = async (city) => {
        setLoading(true);
        const data = await api.getDataWeatherByCity(city);
        // eslint-disable-next-line no-prototype-builtins
        if(data.hasOwnProperty('weather') && data.hasOwnProperty('main')){
            setDataWeather(data);
            setError(null);
        } else {
            setError({ cod: 404, mess: 'Not found data' })
        }
        setLoading(false);
    }

    return (
        <contextWeather.Provider
            value={{
                loading, weathers, error, getDataWeather 
            }}
        >
            { children }
        </contextWeather.Provider>
    )
}