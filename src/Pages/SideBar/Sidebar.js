import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SubContext } from '../../Contexts/ContextProvider';

const Sidebar = () => {

    const {subjects} = useContext(SubContext);
    console.log(subjects);

    return (
        
    );
};

export default Sidebar;