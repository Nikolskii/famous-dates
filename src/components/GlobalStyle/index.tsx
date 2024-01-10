import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { FontStyle } from '@/components/FontStyle';

const Styles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'PT Sans Regular', Arial, sans-serif;
    background: #f4f5f9;
    min-width: 320px;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Normalize />
      <FontStyle />
      <Styles />
    </>
  );
};
