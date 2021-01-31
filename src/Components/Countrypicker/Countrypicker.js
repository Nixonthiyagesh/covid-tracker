import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './Countrypicker.module.css';
import {fetchCountryData} from '../../api';

const Countrypicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState('');
    useEffect(() => {
        const fetchCountries = async () => {
            setCountries( await fetchCountryData());
        }
        fetchCountries();
    }, [setCountries])
    if(countries.length===0){
        return 'Loading';
    }
  return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="global">Global</option>
            {countries?.map((countries,i)=>{return(<option key={i} value={countries.name}>{countries.name}</option>)})}
        </NativeSelect>
      </FormControl>
  );
};

export default Countrypicker;
