import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme } from '../Themes/dark';
import { LightTheme } from '../Themes/light';

export const ThemeToggleContext = React.createContext();

export const AppThemeContext = ({ children }) => {
    /* Set theme as a localStorage item to prevent loosing them on page refresh */
    let appTheme = localStorage.getItem('theme');
    if (!appTheme) {
        appTheme = 'light';
        localStorage.setItem('theme', appTheme);
    }

    const [currentTheme, setTheme] = React.useState(appTheme);

    const themeToggle = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    const Theme = ({ children }) => {
        return (
            <ThemeProvider
                theme={currentTheme === 'light' ? LightTheme : DarkTheme}
            >
                {children}
            </ThemeProvider>
        );
    };

    return (
        <ThemeToggleContext.Provider
            value={{ theme: currentTheme, changeTheme: themeToggle }}
        >
            <Theme>{children}</Theme>
        </ThemeToggleContext.Provider>
    );
};

// export default AppThemeContext;
