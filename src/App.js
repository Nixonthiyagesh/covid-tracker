import React from 'react'
import Cards from './Components/Cards/Cards';
import Countrypicker from './Components/Countrypicker/Countrypicker';
import Chart from './Components/Chart/Chart';
 import styles from './App.module.css';
 import fetchData from './api';
import Covid from './Images/covid-19-img.png';
class App extends React.Component
{ 
  state = {
    data:{},
    country:''
  }
  async componentDidMount(){
    const result = await fetchData();
    console.log('didmount',result);
    this.setState({data:result});
  }
  handleCountryChange = async (country)  => {
    const countrydata = await fetchData(country);
      this.setState({data:countrydata,country:country })
      console.log(country);

    }
  render(){
    const {data,country}=this.state;
  return (
    <div className={styles.container}>
      <img src={Covid} className={styles.covid} />
      <Cards data={data}/>
      <Countrypicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country} />
    </div>
  );
}
}

export default App;
