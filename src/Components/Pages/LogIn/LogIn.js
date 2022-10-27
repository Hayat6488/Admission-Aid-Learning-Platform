import React from 'react';
import { Form, Link } from 'react-router-dom';
import './LogIn.css';
import { FaGoogle, FaGithub } from "react-icons/fa";

const LogIn = () => {

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)
    }

    return (
        <div className='main-container'>
            <div className='log-in-container'>
                <Form onSubmit={handleLogIn}>
                    <div><label><b>Email: </b></label></div>
                    <div><input type="email" name="email" id="email" /></div>
                    <div><label><b>Password: </b></label></div>
                    <div><input type="password" name="pass" id="pass" /></div>
                    <div><button type="submit">Log In</button></div>
                </Form>
                <h4>Don't have an account! Please <Link to='/register'>Register</Link></h4>
                <hr />
                <div className='login-with'>
                    <h3>Log In With</h3>
                    <div>
                        <button className="login-button"><FaGoogle className='icon'></FaGoogle></button>
                        <button className="login-button"><FaGithub className='icon'></FaGithub></button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LogIn;