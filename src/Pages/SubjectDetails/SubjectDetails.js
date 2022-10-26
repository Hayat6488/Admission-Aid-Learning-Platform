import React from 'react';
import './SubjectDetails.css'
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SubContext } from '../../Contexts/ContextProvider';

const SubjectDetails = () => {

    const { mode } = useContext(SubContext);

    const subject = useLoaderData();
    const {Test, chap, des, id, img, instructor, lec, price, quiz, title} = subject;    

    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <h1>{title}</h1>
            <img src={img} alt="" />
            <h2>Tk. {price}</h2>
            <h3>Instructor: {instructor.name}</h3>
            <h4>Number of Chapters: {chap}</h4>
            <h4>Number of Lectures: {lec}</h4>
            <h4>Number of Quizes: {quiz}</h4>
            <h4>Number of Tests: {Test}</h4>
            <h5>{des}</h5>
            <button></button>
        </div>
    );
};

export default SubjectDetails;