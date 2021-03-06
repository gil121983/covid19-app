import React from "react";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import CountryPicker from "./CountryPicker/CountryPicker";
import styles from "./LocalCharts.module.css";
import { fetchData, } from "../../api/";

class LocalCharts extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    this.getData();
  }

  handleCountryChange = (country) => {
    this.getData(country);
  };

  getData = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });  
  };

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <div className={styles.chartsContainer}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Charts data={data} country={country} />
        </div>
      </React.Fragment>
    );
  }
}

export default LocalCharts;
