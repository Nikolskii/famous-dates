import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const StyledTitle = styled.h1`
  font-family: 'PT Sans Bold';
  color: #42567a;
  font-size: 56px;
  line-height: 67px;
  font-weight: 700;
  max-width: 353px;
  margin: 0 0 0 80px;
  position: relative;

  @media ${device.tabletL} {
    font-size: 48px;
    line-height: 58px;
    max-width: 123px;
    margin: 0 0 0 40px;
  }

  @media ${device.tabletM} {
    font-size: 40px;
    line-height: 48px;
    max-width: 123px;
    margin: 0 0 0 30px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 0 20px;
  }

  &:before {
    content: '';
    width: 5px;
    height: 120px;
    background-color: lightcoral;
    position: absolute;
    left: -80px;
    top: 10px;
    background-image: linear-gradient(#3877ee, #ef5da8);

    @media ${device.mobile} {
      display: none;
    }
  }
`;
