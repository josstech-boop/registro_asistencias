const Insignia = ({ children, variant = 'primary', className = '' }) => {
  return <span className={`badge badge-${variant} ${className}`.trim()}>{children}</span>;
};

export default Insignia;
