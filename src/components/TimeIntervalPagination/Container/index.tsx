import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 120px;
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
    row-gap: 11px;
  }
`;
