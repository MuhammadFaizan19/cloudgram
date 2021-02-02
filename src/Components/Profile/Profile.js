import React from 'react';
import classes from './Profile.module.css';

const profile = (props) => {
    return (
        <div className={classes.Profile} >
                <h2>My Info</h2>
                <table className={classes.ProfileTable}>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td>Muhammad</td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td>Faizan</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>faizanvkey@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default profile;
