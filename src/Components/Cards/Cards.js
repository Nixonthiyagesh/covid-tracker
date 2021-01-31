import React from 'react';
import { Grid,Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    //const cardData = data.map((data)=>data);
    console.log('erwewewggg',confirmed)
    if(!confirmed){
        return 'Loading....';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
                    <CardContent >
                    <Typography  color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={confirmed?.value} duration={2.5} separator=',' />
                    </Typography>
                    <Typography  color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbber of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
                <CardContent >
                    <Typography  color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered?.value} duration={2.5} separator=',' />
                    </Typography>
                    <Typography  color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbber of recovered cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
                <CardContent >
                <Typography  color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths?.value} duration={2.5} separator=',' />
                    </Typography>
                    <Typography  color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Numbber of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
};

export default Cards;