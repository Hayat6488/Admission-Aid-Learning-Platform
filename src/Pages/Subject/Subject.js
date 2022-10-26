import './Subject.css'
import React, { useContext } from 'react';
import { SubContext } from '../../Contexts/ContextProvider';


const Subject = (props) => {
    console.log(props);
    const {id, title, img, instructor, lec, price } = props.subject
    const { mode } = useContext(SubContext);
    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <img src={img} alt="" />
        </div>
    );
};

export default Subject;