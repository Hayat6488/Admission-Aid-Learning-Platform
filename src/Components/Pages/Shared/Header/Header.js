import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import './header.css'
import { useContext } from 'react';
import { SubContext } from '../../../Contexts/ContextProvider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Header.css'

const Header = () => {

    const {user} = useContext(AuthContext);

    const { mode, setMode } = useContext(SubContext);

    return (
        <div style={{marginBottom: "60px"}}>
            <AppBar positions="sticky">
                <Toolbar style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                        <AutoStoriesIcon style={{ fontSize: "50px" }}></AutoStoriesIcon>
                        <Typography variant='h4' color="">Admission Aid</Typography>
                    </div>
                    <div className='container'>
                        <Button variant="secondary"><Link to='/courses'>Courses</Link></Button>
                        <Button variant="secondary"><Link to='/login'>Log in</Link></Button>
                        <Button variant="secondary"><Link to='/FAQs'>FAQs</Link></Button>
                        <Button variant="secondary"><Link to='/blogs'>Blogs</Link></Button>
                        {
                            mode ? <Button onClick={() => setMode(!mode)} variant="secondary">Dark</Button> : <Button onClick={() => setMode(!mode)} variant="error">Light</Button>
                        }
                        <p>{user.displayName}</p>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;