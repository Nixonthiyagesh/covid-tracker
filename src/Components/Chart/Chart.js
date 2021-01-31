import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const dailyApi = async () => {
      const result = await fetchDailyData();
      setDailyData(result);
    };
    dailyApi();
  }, []);

  const lineChart = (dailyData.length && 
    (<Line
      data={{ 
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />) 
    );
  console.log('daily',dailyData.map(({ deaths }) => deaths));
   const BarChart = confirmed && (<Bar data={{
     labels:['infected','recovered','deaths'],
     datasets:[{
       label:'people',
       backgroundColor:[
         'rgba(0,0,255,0.5)',
         'rgba(0,255,0,0.5)',
         'rgba(255,0,0,0.5)'
       ],
       data:[confirmed.value,recovered.value,deaths.value]
     }],
   }}
   options={{
     legend:{display:false},
     title:{display:true,text:'Current State in '+country}
   }}
   />)

  return <div className={styles.container}>{country?BarChart:lineChart}</div>;
};

export default Chart;
