import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
  </div>
);
