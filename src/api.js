
const GEO_API_KEY = process.env.REACT_APP_API_KEY_ONE

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_URL_KEY = process.env.REACT_APP_API_KEY_TWO

