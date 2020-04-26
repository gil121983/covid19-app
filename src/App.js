import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from "./components/Layout/index";
import GlobalCharts from "./components/GlobalCharts/index";
import LocalCharts from "./components/LocalCharts/index";


 
// ./node_modules/.bin/json-server --watch store.json --port 3004

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <CssBaseline/>
        <Layout >
          <Switch>
            <Route exact path="/covid19-app" render={() => <h1>HOME</h1>} />
            <Route path="/map" render={(props) => <GlobalCharts {...props} Component={GlobalCharts} />} />
            <Route path="/charts" render={(props) => <LocalCharts {...props} />} component={LocalCharts}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
