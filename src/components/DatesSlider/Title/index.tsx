import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const Title = styled.h2`
  display: none;

  @media ${device.mobile} {
    display: block;
    font-size: 16px;
    color: #42567a;
    margin: 0 20px 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c7cdd9;
  }
`;
