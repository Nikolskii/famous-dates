import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

interface Props {
  $accent?: boolean;
}

export const TimeIntervalYear = styled.h3.attrs<Props>((props) => ({
  $accent: props.$accent,
}))`
  font-family: 'PT Sans Bold';
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -5px;
  color: ${({ $accent }) => ($accent ? '#EF5DA8' : '#5D5FEF')};
  margin: 0;

  @media ${device.tabletL} {
    font-size: 140px;
  }

  @media ${device.tabletM} {
    font-size: 110px;
  }

  @media ${device.mobile} {
    font-size: 56px;
    line-height: 72px;
    letter-spacing: -2px;
  }
`;
