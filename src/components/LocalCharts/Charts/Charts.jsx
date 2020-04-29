import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    
    fetchAPI();
  },[]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgb(0,0,255)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgb(255,0,0)",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets: [
          {
            label: "People",
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(255,0,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  return (
    <React.Fragment>
    <div 
     className={styles.chartContainer}
    >{country ? barChart : lineChart}</div>
    </React.Fragment>
  );
};

export default Charts;
