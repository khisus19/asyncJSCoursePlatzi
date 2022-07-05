const API = "https://the-legend-of-zelda.p.rapidapi.com/items?name=Bow&page=0&limit=5"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51a57b4e65msh25af6e6523ee20ap1b2b89jsnb7c0ca597cc5',
		'X-RapidAPI-Host': 'the-legend-of-zelda.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

