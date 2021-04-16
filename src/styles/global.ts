import { createGlobalStyle } from 'styled-components';

export const globalStye = createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    font-family: ${({ theme }) => theme.typography.family};
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }
`;
