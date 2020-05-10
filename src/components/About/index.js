import React from "react";
import { Typography, Container, Link } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Container align="center">
        <Typography variant="h6">COVID19 App version 1.0</Typography>
        <div style={{ height: "25px" }} />

        <Typography variant="body1">
          Created with React.JS and Material-ui
        </Typography>

        <Typography variant="body1">
          Created by Gil Stolar 2020 , license MIT
        </Typography>

        <Typography variant="body1">
          Github repository: 
        </Typography>
        <Link href='https://github.com/gil121983/covid19-app'>
        <Typography variant="body1">
         https://github.com/gil121983/covid19-app
        </Typography>
        </Link>

        <div style={{ height: "50px" }} />
        <Typography variant="body1">
          Information taken from : 
        </Typography>
        <Link href='https://covid19.mathdro.id/api'>
            <Typography>
                https://covid19.mathdro.id/api
            </Typography>
        </Link>
        <Typography variant="body1">
          and
        </Typography>
        <Link href='https://corona.lmao.ninja/v2/jhucsse'>
            <Typography>
                https://corona.lmao.ninja/v2/jhucsse
            </Typography>
        </Link>
      </Container>
    </div>
  );
};

export default About;
