import React from 'react';
import NavbarTop from '../components/Mui-Atoms/NavbarTop';
import GridLayout from '../components/Mui-Molecules/GridLayout';

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
