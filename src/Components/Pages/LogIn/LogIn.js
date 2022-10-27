import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import './LogIn.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import {GoogleAuthProvider} from 'firebase/auth' 
import { AuthContext } from '../../Contexts/AuthProvider';
import Header from '../Shared/Header/Header';
import { useState } from 'react';


const LogIn = () => {

    const {providerLogIn, signIn} = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error => {
            setError(error.message);
        })
        
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
        })

    }

    return (
        <div>
            <Header></Header>
            <div className='main-container'>
            <div className='log-in-container'>
                <Form onSubmit={handleLogIn}>
                    <div><label><b>Email: </b></label></div>
                    <div><input type="email" name="email" id="email" /></div>
                    <div><label><b>Password: </b></label></div>
                    <div><input type="password" name="pass" id="pass" /></div>
                    <div><button type="submit">Log In</button></div>
                </Form>
                <h4>{error}</h4>
                <h4>Don't have an account! Please <Link to='/register'>Register</Link></h4>
                <hr />
                <div className='login-with'>
                    <h3>Log In With</h3>
                    <div>
                        <button onClick={handleGoogleLogIn} className="login-button"><FaGoogle className='icon'></FaGoogle></button>
                        <button className="login-button"><FaGithub className='icon'></FaGithub></button>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default LogIn;