import { createMuiTheme } from '@material-ui/core/styles';

/*  https://material-ui.com/customization/default-theme/
    https://material-ui.com/customization/color/#picking-colors */

const BlueTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#3f51b5',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#7986cb',
            main: '#d32f2f',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#303f9f',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        fontSize: 20,
    },
    spacing: 1,
});

export default BlueTheme;
