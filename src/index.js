import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ServiceProvider } from './ServiceContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <ServiceProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceProvider>
);
