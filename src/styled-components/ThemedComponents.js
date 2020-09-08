import styled from 'styled-components';

export const PageBG = styled.div`
    background-color: ${(props) => props.theme.bodybgColor};
    width: 95vw;
    height: 90vh;
    padding: 20px;
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
`;

export const DIV = styled.div`
    background-color: ${(props) => props.theme.divbgColor};
    padding: 20px;
    text-align: centre;
`;
