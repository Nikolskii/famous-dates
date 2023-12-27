import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const SlideItemDescription = styled.p`
  color: #42567a;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin: 0;

  @media ${device.tabletL} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${device.tabletM} {
    font-size: 16px;
    line-height: 19px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;
