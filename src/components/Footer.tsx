import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className='' sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Grid className='bg-slate-600 p-14 justify-evenly' container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Get access to our premium services & support
          </Typography>
          <div className="grid grid-cols-2">
            <button className='bg-red-200 text-start p-2 px-3 rounded-md text-sm font-semibold mr-2'>
              Broadcast now
            </button>
            <button className='bg-slate-200 text-start p-2 px-3 rounded-md text-sm font-semibold' >
              Broadcast Lists
            </button>
          </div>
        </Grid>

        {/* Middle Section */}
        <Grid item className='text-white' xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Job Referrals in minutes
          </Typography>
          <small>
            JobMarket.com.ng is an online platform that makes job requests instantaneously accessible to hundreds of Recruitment service providers, to enable them meet their job needs.
          </small>
        </Grid>

        {/* Right Section */}
        <Grid item className='text-white' xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link to={'/'} className='block'>
            About Us
          </Link>
          <Link to={'/'} className='block'>
            Our Services
          </Link>
          <Link to={'/'} className='block'>
            Recruitment Partner
          </Link>
          <Link to={'/'} className='block'>
            Speak With A Job Advisor
          </Link>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Link to={'/'}>
              Terms & Conditions
            </Link>
            {' | '}
            <Link to={'/'}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item>
            <Typography color="textSecondary">
              {'© '}
              JobMarket.com.ng {new Date().getFullYear()}.
              {' All rights reserved.'}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
