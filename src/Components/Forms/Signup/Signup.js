import React, { useState } from 'react'
import classes from './Signup.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { connect } from 'react-redux'
import { signUp } from '../../../Store/actions/authActions';
import { Redirect } from 'react-router-dom'

const Signup = (props) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        firstName: '',
        secondName: '',
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(state);
    }
    const { auth, authError } = props
    if (auth.uid) return <Redirect to="/home"/>
    return (
        <div className={classes.Signup}>
            <h3>Create an Account</h3>
            <form>
                <Input type="text" name="firstName" onChange={handleChange} />
                <Input type="text" name="secondName" onChange={handleChange} />
                <Input type="email" name="email" onChange={handleChange} />
                <Input type="password" name="password" onChange={handleChange} />
                <Button type="submit" onClick={handleSubmit}>Signup</Button>
                {authError ? <p>{authError}</p> : null}
            </form>
        </div>
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
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)