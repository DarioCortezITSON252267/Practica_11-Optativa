import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './catalogo.ts';
import App from './App.tsx';

// createRoot toma el <div id="root"> vacío de index.html; render lo llena.
// El paso 3 (sin JSX) está en sin-jsx.ts: para verlo, pasa `tarjetaSinJsx` a render().
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
