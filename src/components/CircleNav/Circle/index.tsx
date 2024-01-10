import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

interface Props {
  $angleRotate: number;
}

export const Circle = styled.div.attrs<Props>((props) => ({
  $angleRotate: props.$angleRotate,
}))`
  width: 530px;
  height: 530px;
  border: 1px solid #d0d5e0;
  border-radius: 50%;
  margin: 0 auto;
  transform: ${({ $angleRotate }) => `rotate(-${$angleRotate}deg)`};
  transition: transform 0.9s;
  z-index: 1;

  @media ${device.mobile} {
    display: none;
  }
`;
