import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 120px;

  @media ${device.mobile} {
    row-gap: 11px;
  }
`;
