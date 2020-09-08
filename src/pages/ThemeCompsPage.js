import React, { useContext } from 'react';

import { Button, Title } from '../styled-components/StyledComponents';
import ThemedButton from '../styled-components/ThemeButton';
import { PageBG, Text, DIV } from '../styled-components/ThemedComponents';
import { ThemeToggleContext } from '../context/AppThemeContext';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

/* We are passing a default theme for Buttons that arent wrapped in the ThemeProvider */
const btntheme = {
    main: 'mediumseagreen',
};

/* The app Theme changes through React Context; code in the context folder */

const ThemeCompsPage = () => {
    const { theme, changeTheme } = useContext(ThemeToggleContext);
    const changeAppTheme = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <PageBG>
            <DIV>
                <Title> Themed Components </Title>
                <Text> Click on the Below Btn to switch Themes </Text>
                <InvertColorsIcon
                    style={{ color: 'blue' }}
                    onClick={changeAppTheme}
                />
                <Button>Normal</Button>
                <ThemedButton theme={btntheme}>Themed</ThemedButton>
            </DIV>
        </PageBG>
    );
};

export default ThemeCompsPage;
