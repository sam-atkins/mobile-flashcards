import React from 'react';
import styled from 'styled-components/native';

const StyledButtonWrapper = styled.View`
  margin-vertical: 50;
  padding-top: 20;
  padding-horizontal: 25;
  padding-bottom: 25;
`;

const ButtonWrapper = ({ children }) => (
  <StyledButtonWrapper>{children}</StyledButtonWrapper>
);

export default ButtonWrapper;
