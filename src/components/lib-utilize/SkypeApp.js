import React, { useEffect } from 'react';

const SkypeApp = () => {
    useEffect(() => {
        // Skype.ui({
        //     name: 'dropdown',
        //     element: 'skypeContainer',
        //     participants: ['nishkohli96'],
        //     imageSize: 32
        // });
    }, []);

    return (
        <div>
            <p> Open skype </p>
            <div id="skypeContainer"></div>
        </div>
    );
};

export default SkypeApp;
