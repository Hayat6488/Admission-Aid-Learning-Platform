import './Subject.css'
import React, { useContext } from 'react';
import { SubContext } from '../../Contexts/ContextProvider';
import { Button } from '@mui/material';


const Subject = (props) => {
    console.log(props);
    const {id, title, img, instructor, lec, price } = props.subject
    const { mode } = useContext(SubContext);
    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <img src={img} alt="" />
            <p>Instructor: {instructor.name}</p>
            <div className='sub-details'>
                <p>Class: {lec}</p>
                <p>Tk. {price}</p>
                <Button variant="">Details</Button>
            </div>
        </div>
    );
};

export default Subject;