import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${props => props.theme.colors.one};
  color: ${props => props.theme.colors.four};
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  font-size: ${props => props.theme.typography.sizes.xl};
`;
