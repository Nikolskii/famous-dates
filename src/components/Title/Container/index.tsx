import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Container = styled.div`
  position: absolute;
  top: 170px;

  @media ${device.tabletL} {
    top: 120px;
  }

  @media ${device.tabletM} {
    top: 130px;
  }

  @media ${device.mobile} {
    position: static;
  }
`;
