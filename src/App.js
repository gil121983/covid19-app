import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import TabPanel  from "./components/MenuBar";


 
// ./node_modules/.bin/json-server --watch store.json --port 3004

export const App = () => {
    return (
      <>
      <CssBaseline/>
      <TabPanel/>
      </>
    );
  
}

export default App;
