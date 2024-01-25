import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { UserStore } from './contexts/userContext';
import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import { CategoryProvider } from './contexts/searchCategories';
import { SearchProvider } from './contexts/searchContext';
import { Theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <CategoryProvider>
        <UserStore>
          <SearchProvider>
            <App />
          </SearchProvider>
        </UserStore>
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);