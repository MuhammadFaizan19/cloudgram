import React, {useEffect} from 'react';
import classes from './App.module.css';
import BackgroundImage from './Components/BackgroundImage/BackgroundImage';
import Toolbar from './Components/Toolbar/Toolbar';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Components/Forms/Contact/Contact';
import Signin from './Components/Forms/Signin/Signin';
import Signup from './Components/Forms/Signup/Signup';
import LandingIntro from './Components/LandingIntro/LandingIntro';
import Cloudgram from './Container/Cloudgram';
import FriendsList from './Components/FriendsList/FriendsList';
import { connect } from 'react-redux';

const App=(props)=> {
  const {auth}=props;
  useEffect(() => {
  }, [auth.uid])
  return (
    <div className={classes.App}>
        <Toolbar />
        <BackgroundImage/>
        {!auth.uid && <LandingIntro/>}
        <Switch>
          {!auth.uid && <>
          <Route path='/contact' exact component={Contact} />
          <Route path='/login' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <Redirect from='/' to='/cloudgram'/> </>}
          {auth.uid && <> <Route path='/home' exact component={Cloudgram} />
          <Route path='/friends' exact component={FriendsList} />
          <Redirect from='/' to='/home'/> </>}
        </Switch>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(withRouter(App));
