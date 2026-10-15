import type { ReactNode } from 'react';

interface LayoutProps {
  encabezado: ReactNode;
  pie: ReactNode;
  children: ReactNode;
}

// No sabe nada de la tienda: sólo acomoda en su lugar los tres huecos que le pasan.
function Layout({ encabezado, pie, children }: LayoutProps) {
  return (
    <div className="tienda">
      {encabezado}
      <main className="contenido">{children}</main>
      {pie}
    </div>
  );
}

export default Layout;
