const CampoFecha = ({ label, error, ...props }) => {
  return (
    <div className="form-control w-full">
      {label && <label className="label"><span className="label-text">{label}</span></label>}
      <input type="date" className={`input input-bordered w-full ${error ? 'input-error' : ''}`.trim()} {...props} />
      {error && <span className="text-error text-xs mt-1">{error}</span>}
    </div>
  );
};

export default CampoFecha;
