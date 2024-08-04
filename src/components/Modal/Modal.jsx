import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlayContainer}>
      <div className={css.modalWrapper}>
        <h3 className={css.modalTitle}>Delete Contact</h3>
        <p>Do you want to Delete contact?</p>
        <div className={css.btnWrapper}>
          <button type="button" onClick={onConfirm} className={css.btn}>
            Yes
          </button>
          <button type="button" onClick={onClose} className={css.btn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
