const Boton = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Boton;
