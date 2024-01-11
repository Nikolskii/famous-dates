import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Container = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    column-gap: 15px;
    position: absolute;
    bottom: -300px;
    left: 50%;
    transform: translate(-50%);
  }
`;
