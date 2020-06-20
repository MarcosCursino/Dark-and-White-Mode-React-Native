import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroud};
  align-items: center;
  justify-content: center;
`;

export const Tittle = styled.Text`
  color: ${(props) => props.theme.color}
  font-size: 44px;
`;
