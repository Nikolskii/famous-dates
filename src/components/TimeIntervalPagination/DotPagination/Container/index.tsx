import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Container = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    column-gap: 10px;
  }
`;
