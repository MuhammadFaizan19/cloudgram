import React, { useState } from 'react'
import classes from './Signup.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { connect } from 'react-redux'
import { signUp } from '../../../Store/actions/authActions';

const Signup = ({ signUp, authError }) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        fullname: ''
    });
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = Object.values(state)

        let canSubmit = true;

        for (let i = 0; i < values.length; i++) {
            if (!values[i]) {
                canSubmit = false
            }
        }
        console.log(authError)
        canSubmit && setError(null)
        canSubmit && signUp(state);

        !canSubmit && setError('Form not filled')
    }
    return (
        <div className={classes.Signup}>
            <h3>Create an Account</h3>
            <form>
                <Input type="text" name="fullname" onChange={handleChange} />
                <Input type="email" name="email" onChange={handleChange} />
                <Input type="password" name="password" onChange={handleChange} />
                <Button type="submit" onClick={handleSubmit}>Signup</Button>
                {authError ? <p>{authError}</p> : null}
                {error ? <p>{error}</p> : null}
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)