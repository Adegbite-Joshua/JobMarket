import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import BroadcastForm from './BroadcastForm';
import BroadcastList from './BroadcastList';
import Footer from './Footer';

const Dashboard: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <BroadcastForm />
            <BroadcastList />
            <Footer />
        </>
    );
};

export default Dashboard;
