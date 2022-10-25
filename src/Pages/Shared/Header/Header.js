import { Button, Switch } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { data } from '../../../Contexts/ContextProvider';

const Header = () => {

    const {mode, setMode} = useContext(data);

    return (
        <div>
            <h1>Heading</h1>
            {
                mode ? <Button onClick={()=>setMode(!mode)} variant="outlined">Dark</Button> : <Button onClick={()=>setMode(!mode)} variant="outlined">Light</Button>
            }
        </div>
    );
};

export default Header;