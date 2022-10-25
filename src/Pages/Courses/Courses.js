import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../SideBar/Sidebar';
import Cards from '../Cards/Cards';

const Courses = () => {

    return (
        <div style={{paddingTop: "60px"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item xs={9}>
                    <Cards></Cards>
                </Grid>
            </Grid>
        </div>
    );
};

export default Courses;