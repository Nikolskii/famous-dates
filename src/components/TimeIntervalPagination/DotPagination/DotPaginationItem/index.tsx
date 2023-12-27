import styled from 'styled-components';

interface Props {
  $isActiveStage: boolean;
}

export const DotPaginationItem = styled.div.attrs<Props>((props) => ({
  $isActiveStage: props.$isActiveStage,
}))`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #42567a;
  opacity: ${({ $isActiveStage }) => `${$isActiveStage ? '1' : '0.4'}`};
`;
