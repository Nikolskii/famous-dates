import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Container = styled.section`
  display: flex;
  align-items: center;
  column-gap: 39px;
  position: absolute;
  bottom: 55px;
  left: 80px;

  @media ${device.tabletL} {
    left: 40px;
  }

  @media ${device.tabletM} {
    left: 30px;
  }

  @media ${device.mobile} {
    bottom: -320px;
    left: 20px;
  }
`;
