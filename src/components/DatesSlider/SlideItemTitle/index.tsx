import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const SlideItemTitle = styled.h3`
  font-family: 'Bebas Neue', Arial, sans-serif;
  color: #3877ee;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  margin: 0;

  @media ${device.tabletL} {
    font-size: 22px;
    line-height: 26px;
  }

  @media ${device.tabletM} {
    font-size: 20px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;
