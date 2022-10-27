import React from 'react';
import './Register.css'
import { Form, Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        const img = form.img.value;
        console.log(name, email, pass, img)
    }

    return (
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
    );
};

export default Register;