import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const AppContainer = styled.div`
  border: 1px solid #e3e6ed;
  position: relative;

  @media ${device.mobile} {
    border: none;
  }

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    border-right: 1px solid #e3e6ed;
    top: 0;
    left: 50%;

    @media ${device.mobile} {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #e3e6ed;
    top: 480px;
    z-index: -2;

    @media ${device.mobile} {
      display: none;
    }
  }
`;
