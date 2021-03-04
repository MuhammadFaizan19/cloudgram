import React, { useState } from 'react';
import classes from './Toolbar.module.css';

import { connect } from "react-redux";
import { signOut } from '../../Store/actions/authActions';
import { NavLink } from 'react-router-dom';

const Toolbar = ({ isLoggedIn, name, signOut }) => {
    const [userName, setUserName] = useState(null)
    if (name && userName !== name)
        setUserName(name)

    return (
        <header className={classes.Header}>
            <h2><NavLink className={classes.NavLink} to='/cloudgram' id='cloudgram' >Cloudgram</NavLink></h2>
            <nav>
                <ul>
                    {!isLoggedIn &&
                        <>
                            <li><NavLink to='/login' id='login' className={classes.NavLink} >Login</NavLink></li>
                            <li><NavLink to='/signup' id='signup' className={classes.NavLink} >Signup</NavLink></li>
                        </>
                    }

                    {isLoggedIn &&
                        <>
                            {userName && <li className={classes.NavLink} >{userName.toUpperCase()}</li>}
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
        name: state.auth.userData?.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);