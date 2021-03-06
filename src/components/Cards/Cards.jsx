import React from 'react';
import { Card,CardContent, Typography,Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing ={3}  justify="center">
                <section >
                <Grid item component={Card} className={cx(styles.Card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end ={confirmed.value} duration={2.5} separator=","  />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.Card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end ={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.Card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end ={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths Caused By Covid19</Typography>
                    </CardContent>
                </Grid>
                </section>
            </Grid>
        </div>
    )
}

export default Cards;