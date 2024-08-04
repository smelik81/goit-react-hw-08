import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "../Modal/Modal";
import EditContactModal from "../EditContactModal/EditContactModal";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const modalDeleteOpen = () => setIsDeleteModalOpen(true);
  const modalDeleteClose = () => setIsDeleteModalOpen(false);

  const modalEditOpen = () => setIsEditModalOpen(true);
  const modalEditClose = () => setIsEditModalOpen(false);

  const handleOnDelete = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => toast.success("contact successfully deleted"))
      .catch(() => toast.error("contact cannot be deleted"));
  };

  const handleDeleteContact = () => {
    handleOnDelete(id);
    modalDeleteClose();
  };

  return (
    <div className={css.container}>
      <div>
        <li>
          <div className={css.contactcontactInfo}>
            <BsPersonFill size={20} />
            <h2 className={css.h2}>{name}</h2>
          </div>
          <div className={css.contactPhone}>
            <BsFillTelephoneFill size={20} />
            <p className={css.p}>{number}</p>
          </div>
        </li>
      </div>
      <div className={css.btnBlock}>
        <button
          type="button"
          className={css.buttonDelete}
          onClick={modalDeleteOpen}
        >
          <AiTwotoneDelete size="18px" />
        </button>
        <button
          type="button"
          className={css.buttonEdit}
          onClick={modalEditOpen}
        >
          <CiEdit size="18px" />
        </button>
      </div>
      <div>
        {isDeleteModalOpen && (
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={modalDeleteClose}
            onConfirm={handleDeleteContact}
          />
        )}
      </div>
      <div>
        {isEditModalOpen && (
          <EditContactModal
            isOpen={isEditModalOpen}
            onClose={modalEditClose}
            contactId={id}
            initialData={{ name, number }}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
