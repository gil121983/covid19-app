import React from "react";
import Map from "./Map";
import styles from "./GlobalCharts.module.css";
import { CssBaseline } from "@material-ui/core";

const GlobalCharts = () => {
  return (
      <>
      {/* <CssBaseline/> */}
    <div className={styles.container}>
      <Map />
    </div>
</>
  );
};

export default GlobalCharts;
