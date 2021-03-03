import React from 'react';
import classes from './LandingIntro.module.css';

const landingIntro=()=> {
    return (
        <>
            <div className={classes.Name}>
                <h1>CLOUDGRAM</h1>
                <h4>In these moments, time stood still.....</h4>
            </div>
            <div className={classes.Intro}>
                <p>Save your captured moments</p>
                <p>Share pictures with your friends</p>
                <p>Upload unlimited pictures</p>
                <p>Caption your photos</p>
            </div>
        </>
    )
}

export default landingIntro;