import React from 'react';
import classes from './Contact.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const contact = () => {
    return (
        <div className={classes.Contact} >
            <h2>Drop Us a Message</h2>
            <form>
                <textarea name="message" id="m" cols="30" rows="7" placeholder="Your message..."></textarea>
                <Input type="email" name="Email" />
                <Button type="submit">Get in Touch</Button>
            </form>
        </div>
    )
}

export default contact;