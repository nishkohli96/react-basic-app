import React from 'react';
import '../assets/styles/style.css';
import NavTabs from '../components/mui-molecules/NavTabs';

class UIComponents extends React.Component {
    render() {
        return (
            <div className="header">
                <NavTabs />
            </div>
        );
    }
}

export default UIComponents;
