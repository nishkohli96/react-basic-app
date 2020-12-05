import React from 'react';
import 'Assets/Styles/style.css';
import NavTabs from '../components/Mui-Molecules/NavTabs';

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
