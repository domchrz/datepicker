import styled from 'styled-components';

export const SvgContainer = styled.i`
  display: flex;
  color: currentColor;

  & svg {
    width: ${(props) => props.width};
    height: 100%;
  }
`;