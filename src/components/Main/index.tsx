import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Main = styled.main`
  position: relative;
  padding: 215px 0 96px;

  @media ${device.mobile} {
    padding: 60px 0 56px;
  }
`;
