import './current-weather.css'

const CurrentWeather = ({data}) => {
    console.log(data)
    
    return (
        <section className='weather'>
            <section className='top'>
                <section>
                    <span className='city'>{data.city}</span>
                    <span className='weather-description'>{data.weather[0].description}</span>
                </section>

                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </section>
 
            <section className='bottom'>
                <span className='temperature'>{Math.round(data.main.temp)}°C</span>
                
                <section className='details'>
                    <section className='parameter-row'>
                        <span className='parameter-label top'>Details</span>
                    </section>

                    <section className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </section>

                    <section className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </section>

                    <section className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </section>

                    <section className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default CurrentWeather