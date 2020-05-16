import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TabPanel  from "./components/TabPanel";
import Header from "./components/Header";

export const App = () => {
    return (
      <>
      <CssBaseline/>
      <Header/>
      <TabPanel/>
      </>
    );
  
}

export default App;
