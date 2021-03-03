import React from 'react';
import classes from './App.module.css';
import BackgroundImage from './Components/BackgroundImage/BackgroundImage';
import Toolbar from './Components/Toolbar/Toolbar';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Signin from './Components/Forms/Signin/Signin';
import Signup from './Components/Forms/Signup/Signup';
import LandingIntro from './Components/LandingIntro/LandingIntro';
import Cloudgram from './Container/Cloudgram';
import { connect } from 'react-redux';

const App = ({ isLoggedIn }) => {

  return (
    <div className={classes.App}>
      <Toolbar />
      <BackgroundImage />
      {!isLoggedIn &&
        <>
          <LandingIntro />

          <Switch>

            <Route path='/login' exact component={Signin} />
            <Route path='/signup' exact component={Signup} />
            <Redirect from='/' to='/cloudgram' />

          </Switch>
        </>
      }

      {isLoggedIn &&
        <Switch>

          <Route path='/home' exact component={Cloudgram} />
          <Redirect from='/' to='/home' />

        </Switch>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps, null)(withRouter(App));
