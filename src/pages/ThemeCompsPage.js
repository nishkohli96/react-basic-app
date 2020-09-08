import React from 'react';

import { Button } from '../styled-components/StyledComponents';
import ThemedButton from '../styled-components/ThemeButton';
import { PageBG, Text, DIV } from '../styled-components/ThemedComponents';

/* We are passing a default theme for Buttons that arent wrapped in the ThemeProvider */
const btntheme = {
    main: 'mediumseagreen',
};

/* I had previously used the ThemeProvider here in the return method, now moved it
    to index.js page so that it can be applied throughout the app */
const ThemeCompsPage = () => {
    
    return (
        <PageBG>
            <DIV>
                <Text> This Text uses theme color </Text>
                <Button>Normal</Button>
                <ThemedButton theme={btntheme}>Themed</ThemedButton>
            </DIV>
        </PageBG>
    );
};

export default ThemeCompsPage;
