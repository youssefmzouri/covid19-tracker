import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = URL;
    if(country) {
        changeableUrl = `${URL}/countries/${country}`;
    }
    try {
        const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch(e) {
        console.log(e);
    }
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