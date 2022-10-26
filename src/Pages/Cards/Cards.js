import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { SubContext } from '../../Contexts/ContextProvider';
import Subject from '../Subject/Subject';

const Cards = () => {

    const { subjects } = useContext(SubContext);
    console.log(subjects);

    return (
        <div>
            <Grid lg={12} item container spacing={2}>
                {
                    subjects.map(subject => <Grid item lg={3} sm={6} xs={12}><Subject key={subject.id} subject={subject}></Subject></Grid>)
                }
            </Grid>
        </div>
    );
};

export default Cards;