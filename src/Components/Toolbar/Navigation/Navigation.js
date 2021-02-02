import React from 'react';
import classes from './Navigation.module.css';
import { connect } from "react-redux";
import { signOut } from '../../../Store/actions/authActions';
import { NavLink } from 'react-router-dom';


const navigation = (props) => {
    const { auth} = props;
    const clickHandler=()=>{
        props.signOut();
        props.location.history.push('/cloudgram');
    }
    return (
        <>
            {!auth.uid && <li><NavLink to='/contact' id='contact' className={classes.NavLink} >Contact</NavLink></li>}
            {!auth.uid && <li><NavLink to='/login' id='login' className={classes.NavLink} >Login</NavLink></li>}
            {!auth.uid && <li><NavLink to='/signup' id='signup' className={classes.NavLink} >Signup</NavLink></li>}
            {auth.uid && <li><NavLink to='/home' id='home' className={classes.NavLink} >Home</NavLink></li>}
            {auth.uid && <li> <NavLink to='/friends' id='friends' className={classes.NavLink} >Friends</NavLink></li>}
            {auth.uid && <li> <NavLink to='/login' id='logout' onClick={clickHandler} className={classes.NavLink} >Logout</NavLink></li>}
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation);