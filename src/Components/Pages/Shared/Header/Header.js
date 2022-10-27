import { AppBar, Button, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
// import './header.css'
import { useContext } from 'react';
import { SubContext } from '../../../Contexts/ContextProvider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Header.css'
import { FaUserAlt } from 'react-icons/fa'
import { width } from '@mui/system';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext);

    const { mode, setMode } = useContext(SubContext);

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error)
            })
    }

    return (
        <div style={{ marginBottom: "60px" }}>
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
                        <Button variant="secondary"><Link to='/FAQs'>FAQs</Link></Button>
                        <Button variant="secondary"><Link to='/blogs'>Blogs</Link></Button>
                        {
                            mode ? <Button onClick={() => setMode(!mode)} variant="secondary">Dark</Button> : <Button onClick={() => setMode(!mode)} variant="error">Light</Button>
                        }
                        {
                            user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant="secondary">Log Out</Button>
                                        {
                                            user?.photoURL ?
                                            <Tooltip title={user?.displayName}>
                                                <div><img style={{
                                                    height: '25px',
                                                    width: '25px'
                                                }} src={user?.photoURL} alt="" /></div>
                                            </Tooltip>
                                            :
                                            <FaUserAlt></FaUserAlt>
                                        }
                                    </>
                                :
                                <Button variant="secondary"><Link to='/login'>Log in</Link></Button>

                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;