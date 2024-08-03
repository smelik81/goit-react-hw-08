import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleOnDelete = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => toast.success("contact successfully deleted"))
      .catch(() => toast.error("contact cannot be deleted"));
  };

  return (
    <div className={css.container}>
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
      <button className={css.buttonContact} onClick={() => handleOnDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
