import styled from 'styled-components';

/* Refer
    https://styled-components.com/docs/advanced
*/

/* Define our button, but with the use of props.theme this time */
/* Color the border and text with theme.main */

const ThemedButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
`;

ThemedButton.defaultProps = {
    theme: {
        main: 'palevioletred',
    },
};

export default ThemedButton;
