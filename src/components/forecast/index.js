import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import './forecast.css'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Forecast = ({ data }) => {

    console.log(data)

    return (
    <>
        <label className="title">Forecast</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <section className='forecast-item'>
                                <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`}/>
                                <span className='timestamp'>{MONTHS[item.dt_txt[6]-1]} {item.dt_txt.slice(9,11)}from {item.dt_txt.slice(10, -3)}</span>
                                <span className='description'>{item.weather[0].description}</span>
                                <span className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</span>
                            </section>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    
                    <AccordionItemPanel>
                        <section className='forecast-details'>
                            <section className='forecast-details-item'>
                                <span>Feels Like</span>
                                <span>{Math.round(item.main.feels_like)}°C</span>
                            </section>

                            <section className='forecast-details-item'>
                                <span>Wind</span>
                                <span>{item.wind.speed} m/s</span>
                            </section>

                            <section className='forecast-details-item'>
                                <span>Humidity</span>
                                <span>{item.main.humidity}%</span>
                            </section> 

                            <section className='forecast-details-item'>
                                <span>Pressure</span>
                                <span>{item.main.pressure} hPa</span>
                            </section>                          
                        </section>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
    )
}

export default Forecast