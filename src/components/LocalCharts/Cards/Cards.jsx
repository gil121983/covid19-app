import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
     
    if(!confirmed){
        return 'Loading...'
    }
    
    return (
        <React.Fragment>
        <div 
        className = {styles.cardContainer}
        >
            <Grid container spacing={3} justify="center">
            
            <Grid item component={Card}  sm={12} md={3} 
            className={cx(styles.dataCard, styles.infected)}
            >
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> Infected</Typography>
                    <Typography varient='h5'>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    
                </CardContent>
            </Grid>
            
            <Grid item component={Card}  sm={12} md={3} 
            className={cx(styles.dataCard, styles.recovered)}
            >
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> Recoveries</Typography>
                    <Typography varient='h5'>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                  
                </CardContent>
            </Grid>
            
            <Grid item component={Card} sm={12} md={3} 
            className={cx(styles.dataCard, styles.deaths)}
            >
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> Deaths</Typography>
                    <Typography varient='h5'>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                  
                </CardContent>
            </Grid>

             </Grid>
        </div>

        </React.Fragment>
    )
}

export default Cards
