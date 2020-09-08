import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeToggleContext } from '../context/AppThemeContext';
import {
    Container,
    Title,
    Wrapper,
    Button,
    Input,
    PswdInput,
} from '../styled-components/StyledComponents';
import { PageBG, Text } from '../styled-components/ThemedComponents';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

/* A new component based on Button, but with some override styles */
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const ReversedButton = (props) => (
    <Button {...props} children={props.children.split('').reverse()} />
);

const NewPageBG = styled(PageBG)`
    width: 300px;
    height: 100px;
    align-self: centre;
`;

function goToThemedComp() {
    window.location.href = '/theme';
}

/* Imp: Define styled component outside of the render method, 
    otherwise it will be recreated on every single render pass */
const StyledCompsPage = () => {

    const { theme, changeTheme } = useContext(ThemeToggleContext);
    const changeAppTheme = () => {
        changeTheme((theme === 'light')?'dark':'light' ) 
    };
    console.log("contde " ,useContext(ThemeToggleContext))
    return (
        <Container>
            <Wrapper>
                <Title> My First Styled Component </Title>
                <Button primary>Primary</Button>
                <TomatoButton> TomatoButton </TomatoButton>
                <Button primary as={ReversedButton}>
                    Custom Button with Normal Button styles
                </Button>
                <Input defaultValue="@geelen" type="text" inputColor="blue" />
                <PswdInput />
                <Title> Themed Components </Title>
                <Text> Click on the Below Btn to switch Themes </Text>
                <InvertColorsIcon
                    style={{ color: 'blue' }}
                    onClick={changeAppTheme}
                />
                <NewPageBG>
                    <Text> Themed Text inside a Themed Div</Text>
                </NewPageBG>
                <Button onClick={goToThemedComp}>Go to Themed Page</Button>
            </Wrapper>
        </Container>
    );
};

export default StyledCompsPage;
