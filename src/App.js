import React from "react";

import {Cards, Chart, CountryPicker} from './components';

import styles from './App.module.css';

import { fetchData } from "./api";

export default class App extends React.Component {
    state = {
        data: {}
    };
    componentDidMount = async () => {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    };

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}