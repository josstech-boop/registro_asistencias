const CampoSeleccion = ({ label, options = [], error, ...props }) => {
  return (
    <div className="form-control w-full">
      {label && <label className="label"><span className="label-text">{label}</span></label>}
      <select className={`select select-bordered w-full ${error ? 'select-error' : ''}`.trim()} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && <span className="text-error text-xs mt-1">{error}</span>}
    </div>
  );
};

export default CampoSeleccion;
