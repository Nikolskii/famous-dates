import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const TimeIntervalContainer = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 95px;
  position: absolute;
  width: 100%;
  top: 390px;
  z-index: -1;

  @media ${device.tabletL} {
    column-gap: 80px;
  }

  @media ${device.tabletM} {
    column-gap: 35px;
  }

  @media ${device.mobile} {
    position: static;
    column-gap: 27px;
    margin-top: 56px;
  }
`;
