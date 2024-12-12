import React, { useState } from 'react';
import { Typography, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Call, Menu, Close } from '@mui/icons-material';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <nav className='flex justify-between items-center bg-transparent px-10 md:px-20 p-5'>
            {/* Logo */}
            <div className='text-blue-600 flex flex-col items-center gap-1'>
                <h4 className='text-2xl md:text-3xl'>
                    JOBMARKET
                </h4>
                <h6 className='text-xl ms-auto' >
                    .com.ng
                </h6>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-10 items-center'>
                <Link className='text-sm font-semibold' to=''>About Us</Link>
                <Link className='text-sm font-semibold' to=''>
                    <Call /> Support
                </Link>
                <Link className='text-sm font-semibold' to=''>Sign Up</Link>
                <Link className='text-sm font-semibold text-white bg-blue-600 px-10 py-2 rounded-lg' to=''>
                    Broadcast Now
                </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className='inline md:hidden'>
                <IconButton onClick={toggleDrawer(true)} edge="start" aria-label="menu">
                    <Menu fontSize="large" />
                </IconButton>
            </div>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div className='w-64 bg-white h-full flex flex-col px-3'>
                    <div className='flex justify-between items-center p-4'>
                        <Typography variant="h6" className='text-blue-600 font-bold'>
                            JOBMARKET
                        </Typography>
                        <IconButton onClick={toggleDrawer(false)} aria-label="close">
                            <Close />
                        </IconButton>
                    </div>
                    <List>
                        <ListItem component={Link} to={''} onClick={toggleDrawer(false)}>
                            <ListItemText primary="About Us" />
                        </ListItem>
                        <ListItem component={Link} to={''} onClick={toggleDrawer(false)}>
                            <ListItemText primary={<span><Call /> Support</span>} />
                        </ListItem>
                        <ListItem component={Link} to={''} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Sign Up" />
                        </ListItem>
                        <ListItem component={Link} to={''} onClick={toggleDrawer(false)} className='bg-blue-600 text-white rounded-lg'>
                            <ListItemText primary="Broadcast Now" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </nav>
    );
};

export default Header;
