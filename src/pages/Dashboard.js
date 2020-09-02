import React from 'react';
import NavbarTop from '../components/NavbarTop';
import GridLayout from '../components/GridLayout';

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
