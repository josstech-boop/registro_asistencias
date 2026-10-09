const ModalAdministracion = ({ title = 'Modal', children, open = false }) => {
  if (!open) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <button className="btn">Cerrar</button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalAdministracion;
