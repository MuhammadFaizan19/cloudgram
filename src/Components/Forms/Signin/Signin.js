import React, { useState } from 'react'
import classes from './Signin.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { connect } from 'react-redux'
import { signIn } from '../../../Store/actions/authActions';
import { Redirect } from 'react-router-dom'

const Signin = (props) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn(state);
    }
    const { auth, authError } = props
    if (auth.uid) return <Redirect to="/home" />
    return (
        <div className={classes.Signin} >
            <h3>Sign in to Your Account</h3>
            <form>
                <Input type="email" name="email" onChange={handleChange} />
                <Input type="password" name="password" onChange={handleChange} />
                <Button type="submit" onClick={handleSubmit}>Signin</Button>
                {authError ? <p>{authError}</p> : null}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)