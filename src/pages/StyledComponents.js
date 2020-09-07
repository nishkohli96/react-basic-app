import React from 'react';
import styled from 'styled-components';
import { Title, Wrapper, Button } from '../styled-components/inlinestyled';

/* A new component based on Button, but with some override styles */
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const StyledComponents = () => {
    return (
        <Wrapper>
            <Title> My First Styled Component </Title>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton> TomatoButton </TomatoButton>
        </Wrapper>
    );
} 

export default StyledComponents;