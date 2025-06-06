import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from 'react-router-dom';
import PageLoader from './components/general/PageLoader.jsx';
import IndiaOutlineLoading from './components/general/PageLoader.jsx';

const App = lazy(() => import('./App.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<IndiaOutlineLoading />}>
          <App />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);