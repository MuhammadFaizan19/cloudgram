import React from 'react';
import classes from './Toolbar.module.css';

import { connect } from "react-redux";
import { signOut } from '../../Store/actions/authActions';
import { NavLink } from 'react-router-dom';

const Toolbar = ({ isLoggedIn, signOut }) => {

    return (
        <header className={classes.Header}>
            <h2><NavLink className={classes.NavLink} to='/cloudgram' id='cloudgram' >Cloudgram</NavLink></h2>
            <nav>
                <ul>
                    {!isLoggedIn && <> <li><NavLink to='/contact' id='contact' className={classes.NavLink} >Contact</NavLink></li>
                        <li><NavLink to='/login' id='login' className={classes.NavLink} >Login</NavLink></li>
                        <li><NavLink to='/signup' id='signup' className={classes.NavLink} >Signup</NavLink></li> </>}

                    {isLoggedIn &&
                        <>
                            <li><NavLink to='/home' id='home' className={classes.NavLink} >Home</NavLink></li>
                            {/* <li> <NavLink to='/friends' id='friends' className={classes.NavLink} >Friends</NavLink></li> */}
                            <li> <NavLink to='/login' id='logout' onClick={() => signOut()} className={classes.NavLink} >Logout</NavLink></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.firebase.auth.uid,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);