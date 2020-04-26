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
    console.log(fetchedData);
    
  };

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
          <Cards data={data} />
        </div>
      </React.Fragment>
    );
  }
}

export default LocalCharts;
