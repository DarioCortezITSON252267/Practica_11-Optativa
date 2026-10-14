// Paso 3: «Hola mundo» sin JSX. Sólo createElement(tipo, props, ...hijos).
import { createElement } from 'react';

// Un título: lo mismo que <h1>Hola mundo</h1>.
export const tituloSinJsx = createElement('h1', null, 'Hola mundo');

// Una tarjeta con tres elementos dentro: cada etiqueta es una llamada anidada.
export const tarjetaSinJsx = createElement(
  'article',
  { className: 'tarjeta' },
  createElement('div', { className: 'tarjeta__avatar' }, 'OV'),
  createElement('h2', { className: 'tarjeta__nombre' }, 'Omar Valdez'),
  createElement('p', { className: 'tarjeta__carrera' }, 'Ingeniería de Software'),
);
