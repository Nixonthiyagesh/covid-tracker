import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
    let countryUrl = url;
    if(country && country!=='global'){
        countryUrl= `${url}/countries/${country}`      
    }
    console.log('countryUrl',countryUrl)
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countryUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) { console.log(error);}
};

export default fetchData;

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    console.log("data", data, "modify", modifiedData);

    return modifiedData;
  } catch (error) {}
};

export const fetchCountryData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    /* const modifiedData = data.map((countries)=>({
            countries:countries.name
        }))  */
    console.log("countries", countries);
    return countries;
  } catch (error) {
    console.log("err", error);
  }
};
