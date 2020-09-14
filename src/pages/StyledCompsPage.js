import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Title,
    Wrapper,
    Button,
    Input,
    PswdInput,
} from '../styled-components/StyledComponents';
import { PageBG, Text } from '../styled-components/ThemedComponents';

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

/* Imp: Define styled component outside of the render method, 
    otherwise it will be recreated on every single render pass */
const StyledCompsPage = () => {
    const history = useHistory();

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
                <Button onClick={() => history.push('/theme')}>
                    Go to Themed Page
                </Button>
                <NewPageBG>
                    <Text>Themed Text inside a Themed Div</Text>
                </NewPageBG>
                <Text> This Text uses theme color </Text>
            </Wrapper>
        </Container>
    );
};

export default StyledCompsPage;
