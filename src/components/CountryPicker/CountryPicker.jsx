import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl, FormControlLabel}  from "@material-ui/core";
import styles           from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const LABEL_COUNTRY_PICKER = "Choose one of these countries: ";

const CountryPicker = ({ country, handleCountryChange }) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() => {
       const fetchAPI = async () => {
           setfetchedCountries(await fetchCountries());
       };
        fetchAPI();
    }, [setfetchedCountries]);
    return (
        <FormControl className={styles.formControl}>
            <FormControlLabel className={styles.formControl} control={
                <NativeSelect className={styles.select}
                              value={country}
                              onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map( (countryName, index) =>
                        <option value={countryName} key={index}>{countryName}</option>
                    )}
                </NativeSelect>
            } label={LABEL_COUNTRY_PICKER} labelPlacement={"start"}/>

        </FormControl>
    )
};
export default CountryPicker;