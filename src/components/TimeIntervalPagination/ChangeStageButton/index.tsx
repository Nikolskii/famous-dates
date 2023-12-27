import prevIcon from './prevIcon.png';
import nextIcon from './nextIcon.png';
import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

interface Props {
  direction: 'prev' | 'next';
}

export const ChangeStageButton = styled.button<Props>`
  border: 1px solid #9ba6ba;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #42567a;
  font-weight: 400;
  transition: opacity 0.5s;
  background: ${({ direction }) =>
    `url(${direction === 'prev' ? prevIcon : nextIcon}) no-repeat center`};

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  @media ${device.mobile} {
    width: 25px;
    height: 25px;
    background-size: 6px;
  }
`;
