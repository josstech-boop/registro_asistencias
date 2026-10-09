const LayoutAutenticacion = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-box bg-base-100 p-6 shadow-xl">{children}</div>
    </div>
  );
};

export default LayoutAutenticacion;
