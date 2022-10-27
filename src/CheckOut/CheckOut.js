import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SubContext } from '../Contexts/ContextProvider';
import './checkout.css'

const CheckOut = () => {

    const subject = useLoaderData();
    const {mode} = useContext(SubContext);
    const {img, price, title} = subject;

    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <div className='des'>
                <h2>Check Out</h2>
                <div className='check-out-container'>
                    <img src={img} alt="" />
                    <div>
                        <h3>{title}</h3>
                        <h3>Price: Tk. {price}</h3>
                        <Button variant="contained" color={`${mode ? "success" : "primary"}`}>Proceed To Payment</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;