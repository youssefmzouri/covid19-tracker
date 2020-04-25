import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = URL;
    if(country) {
        changeableUrl = `${URL}/countries/${country}`;
    }

    return await axios.get(changeableUrl).then((response) => {
        const {data: { confirmed, recovered, deaths, lastUpdate }} = response;
        return { confirmed, recovered, deaths, lastUpdate };
    }).catch((error) => {
        console.log(`ERROR getting country ${country}`, error.toJSON());
        return {code: 404, message: "Country not found..."};
    });
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch(e) {

    }
};


export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${URL}/countries`);
        return countries.map( (county) => county.name);
    } catch (e) {
        console.log(e);
    }
};