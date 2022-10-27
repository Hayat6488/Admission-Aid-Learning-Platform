import React from 'react';
import './SubjectDetails.css'
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { SubContext } from '../../Contexts/ContextProvider';
import { Button } from '@mui/material';

const SubjectDetails = () => {

    const { mode } = useContext(SubContext);

    const subject = useLoaderData();
    const { Test, chap, des, id, img, instructor, lec, price, quiz, title } = subject;

    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <div className='des'>
                <h1>{title}</h1>
                <img src={img} alt="" />
                <h2>Tk. {price}</h2>
                <h3>Instructor: {instructor.name}</h3>
                <h4>Number of Chapters: {chap}</h4>
                <h4>Number of Lectures: {lec}</h4>
                <h4>Number of Quizes: {quiz}</h4>
                <h4>Number of Tests: {Test}</h4>
                <div className='description-container'>
                    <div className='description'>
                        <h5>{des}</h5>
                    </div>
                </div>
                <Button variant="contained" color={`${mode ? "success" : "primary"}`}><Link to={`/courses/${id}`}>Get Premium Access</Link></Button>
            </div>
        </div>
    );
};

export default SubjectDetails;