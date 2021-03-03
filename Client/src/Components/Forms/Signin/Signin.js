import React, { useState } from 'react'
import classes from './Signin.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { connect } from 'react-redux'
import { signIn, signInEmailPassword } from '../../../Store/actions/authActions';

const Signin = ({ authError, signIn, googleSignIn }) => {
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
        signIn(state);
    }

    return (
        <div className={classes.Signin} >
            <h3>Sign in to Your Account</h3>
            <form>
                <Input type="email" name="email" onChange={handleChange} />
                <Input type="password" name="password" onChange={handleChange} />
                <Button type="submit" onClick={handleSubmit}>Signin</Button>
                {authError ? <p>{authError}</p> : null}
            </form>
            <p>OR</p>
            <Button onClick={() => googleSignIn()} >Sign In With Google</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signInEmailPassword(creds)),
        googleSignIn: () => dispatch(signIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)