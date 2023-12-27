import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  @media ${device.mobile} {
    column-gap: 8px;
  }
`;
