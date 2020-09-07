
import React from 'react';
import styled from 'styled-components';

/* Refer
    https://styled-components.com/docs/basics#installation
*/

/* Creating and exporting pre-styled HTML components */

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

/* Create a Wrapper component that'll render a <section> tag with some styles */
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

/* Adapt the colors based on primary prop */
export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;