import React from 'react';
import './Error.css'
import pic from ''

const Error = () => {
    return (
        <div>
            <div className='error p-20 flex flex-col justify-center items-center h-fit'>
            <img src={pic} alt="" />
            <p className='text-3xl font-bold text-yellow-400'>স্যার!!! ভুল পথে আসলাম না তো.... আরেকবার একটু দেখে নিবেন নাকি!!!</p>
        </div>
        </div>
    );
};

export default Error;