import { useId, useState } from "react";
import css from "./EditContactModal.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { updateContact } from "../../redux/contacts/operations";

const EditContactModal = ({ isOpen, onClose, contactId, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData ? initialData.name : "",
    number: initialData ? initialData.number : "",
  });
  const nameId = useId();
  const numberId = useId();
  const dispatcch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatcch(
        updateContact({ contactId, updateContact: formData })
      ).unwrap();
      toast.success("Contact updated successfully!!!");
      onClose();
    } catch (error) {
      toast.error("Contact cannot be updated");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.containerOverlay}>
      <div className={css.containerWrapper}>
        <h3 className={css.editTitle}>Edit Contact Form</h3>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.formContainer}>
            <label htmlFor={nameId} className={css.label}>
              Name:
              <input
                id={nameId}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={css.editInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor={numberId}>
              Number:
              <input
                id={numberId}
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={css.editInput}
              />
            </label>
          </div>
          <div className={css.btnEditWrapper}>
            <button type="submit" className={css.btnChange}>
              Change
            </button>
            <button type="button" onClick={onClose} className={css.btnClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContactModal;
