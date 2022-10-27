import React, { useContext, useState } from 'react';
import './Register.css'
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Header from '../Shared/Header/Header';

const Register = () => {

    const {createUseer} = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.pass.value;
        const img = form.img.value;
        createUseer(email,password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError(error.message);

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
                <Form onSubmit={handleRegister}>
                    <div><label><b>Name: </b></label></div>
                    <div><input type="text" name="name" id="name" /></div>
                    <div><label><b>Email: </b></label></div>
                    <div><input type="email" name="email" id="email" /></div>
                    <div><label><b>Image Url</b></label></div>
                    <div><input type="text" name="img" id="img" /></div>
                    <div><label><b>Password: </b></label></div>
                    <div><input type="password" name="pass" id="pass" /></div>
                    <div><button>Register</button></div>
                </Form>
                <h4>Already Registered! Please <Link to='/login'>Log In</Link></h4>

            </div>
        </div>
        </div>
    );
};

export default Register;