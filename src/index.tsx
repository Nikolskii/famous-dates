import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { GlobalStyle } from '@/components/GlobalStyle';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
