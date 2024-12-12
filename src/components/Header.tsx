import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Call } from '@mui/icons-material';

const Header: React.FC = () => {
    return (
        <nav className='flex justify-between items-center bg-transparent px-20 p-5'>
            <div className='text-blue-600'>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    JOBMARKET
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'end' }}>
                .com.ng
                </Typography>
            </div>
            <div className='hidden md:flex gap-10 items-center'>
                <Link className='text-sm font-semibold' to={''}>About Us</Link>
                <Link className='text-sm font-semibold' to={''}><Call/> Support</Link>
                <Link className='text-sm font-semibold' to={''}>Sign Up</Link>
                <Link className='text-sm font-semibold text-white bg-blue-600 pe-10 p-2 rounded-lg' to={''}>Broadcast Now</Link>
            </div>
        </nav>
    );
};

export default Header;
