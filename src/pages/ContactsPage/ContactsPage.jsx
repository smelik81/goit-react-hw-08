import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactFilter from "../../components/ContactFilter/ContactFilter";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Spiner from "../../components/Spiner/Spiner";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {isLoading && (
        <div className={css.spinerBlock}>
          <Spiner />
        </div>
      )}
      {!isLoading && (
        <div className={css.content}>
          <div className={css.wrapperContactFormFilter}>
            <ContactForm />
            <ContactFilter />
          </div>
          {contacts.length > 0 && <ContactList />}
        </div>
      )}
    </>
  );
};

export default ContactsPage;
