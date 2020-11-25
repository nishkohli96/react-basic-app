import React from 'react';
import NavbarTop from '../components/mui-atoms/NavbarTop';
import GridLayout from '../components/mui-molecules/GridLayout';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NavbarTop />
                <GridLayout />
            </div>
        );
    }
}

export default Dashboard;
