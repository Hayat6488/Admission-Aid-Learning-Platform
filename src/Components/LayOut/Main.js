import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Sidebar from '../Pages/SideBar/Sidebar';

const Main = () => {
    return (
        <div style={{paddingTop: "60px"}}>
            <Header></Header>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item xs={9}>
                    <Outlet></Outlet>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default Main;