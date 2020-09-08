import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme } from '../themes/dark';
import { LightTheme } from '../themes/light';

export const ThemeToggleContext = React.createContext();

const AppThemeContext = ({ children }) => {

    const [currentTheme, setTheme] = React.useState('light');

    const themeToggle = (newTheme) => {
        console.log("teying to set ", newTheme);
        // const mode = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log("new context: ",(ThemeToggleContext));
    };

    const Theme = ({ children }) => {
        return (
            <ThemeProvider theme={currentTheme === 'light' ? LightTheme : DarkTheme}>
                {children}
            </ThemeProvider>
        );
    };

    return(
        <ThemeToggleContext.Provider value={{ theme: currentTheme , changeTheme: themeToggle }}>
            <Theme>
                { children }
            </Theme>
        </ThemeToggleContext.Provider>
    );
}

export default AppThemeContext;