import { createContext, useContext, useMemo, useState } from 'react';

const ContextoAplicacion = createContext(null);

export const ProveedorAplicacion = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ContextoAplicacion.Provider value={value}>{children}</ContextoAplicacion.Provider>;
};

export const useContextoAplicacion = () => {
  const context = useContext(ContextoAplicacion);

  if (!context) {
    throw new Error('useContextoAplicacion debe usarse dentro de un ProveedorAplicacion');
  }

  return context;
};

export default ContextoAplicacion;
