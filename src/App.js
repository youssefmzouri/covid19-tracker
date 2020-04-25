import React from "react";

import {Cards, Chart, CountryPicker, ErrorMessage} from './components';
import styles from './App.module.css';
import { fetchData } from "./api";
import coronaImage from './images/image.png';

const COUNTRY_NOT_FOUND = "Sorry, there are no info with this country.";


export default class App extends React.Component {
    state = {
        data: {},
        country: '',
        error: false
    };
    componentDidMount = async () => {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        this.handleCountryChange = this.handleCountryChange.bind();
    };

    handleCountryChange = async (country) => {
        let fetchedData = await fetchData(country);
        if (fetchedData.code !== 404) {
            this.setState({ data: fetchedData, country: country, error: false});
        } else {
            this.setState({ data: {}, country: country, error: true});
        }
    };

    render() {
        const { data, country, error } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                {error ?
                    <>
                        <CountryPicker country={country} handleCountryChange={ this.handleCountryChange }/>
                        <ErrorMessage severity={"error"} title={"Error"} message={COUNTRY_NOT_FOUND} />
                    </>
                :
                    <>
                        <Cards data={data}/>
                        <CountryPicker country={country} handleCountryChange={ this.handleCountryChange }/>
                        <Chart data={data} country={country}/>
                    </>
                }
            </div>
        );
    }
}