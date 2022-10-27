import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SubContext } from '../../Contexts/ContextProvider';
import {teal} from '@mui/material/colors'

const Sidebar = () => {

    const {mode, subjects} = useContext(SubContext);
    const primary = teal[300];

    return (
        <div 
        style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                padding: "0 30px"
                }} color= "primary">
            {
                subjects.map(sub => <Button  variant="contained" color={`${mode ? "primary" : "success"}`}><Link to={`/courses/${sub.id}`}>{sub?.title}</Link></Button>)
            }
        </div>
    );
};

export default Sidebar;