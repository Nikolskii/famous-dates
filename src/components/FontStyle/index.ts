import PTSansRegular from './fonts/PTSans-Regular.ttf';
import PTSansBold from './fonts/PTSans-Bold.ttf';
import BebasNeueRegular from './fonts/BebasNeue-Regular.ttf';
import { createGlobalStyle } from 'styled-components';

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'PT Sans Regular';
    font-weight: 400;
    font-display: swap;
    src: local('PT Sans Regular'), local('PTSansRegular'),
    url(${PTSansRegular}) format('truetype'),
  }

  @font-face {
    font-family: 'PT Sans Bold';
    font-weight: 700;
    font-display: swap;
    src: local('PT Sans Bold'), local('PTSansBold'),
    url(${PTSansBold}) format('truetype'),
  }
  
  @font-face {
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-display: swap;
    src: local('Bebas Neue'), local('BebasNeue'),
    url(${BebasNeueRegular}) format('truetype'),
  }
`;
