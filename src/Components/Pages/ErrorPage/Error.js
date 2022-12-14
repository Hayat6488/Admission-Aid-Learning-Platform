import React, { useContext } from 'react';
import './Error.css'
import pic from '../../images/error.png'
import { SubContext } from '../../Contexts/ContextProvider';
import Header from '../Shared/Header/Header';

const Error = () => {

    const { mode } = useContext(SubContext)

    return (
        <div>
            <Header></Header>
            <div className={`${mode ? "light" : "dark"}`}>
                <div className='error p-20 flex flex-col justify-center items-center h-fit'>
                    <img src={pic} alt="" />
                </div>
                <h2>
                    স্যার!!! ভুল পথে আসলাম না তো.... আরেকবার একটু দেখে নিবেন নাকি!!!
                </h2>
            </div>
        </div>
    );
};

export default Error;