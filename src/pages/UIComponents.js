import React from 'react';
import '../assets/styles/style.css';
import NavTabs from '../components/NavTabs';

class UIComponents extends React.Component {
    render() {
        const { data } = this.props.location;
        console.log('data here:', data);
        return (
            <div className="header">
                <NavTabs />
            </div>
        );
    }
}

export default UIComponents;
