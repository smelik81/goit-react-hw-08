import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactFilter from "../../components/ContactFilter/ContactFilter";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Spiner from "../../components/Spiner/Spiner";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
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
      {isLoading && <Spiner />}
      {!isLoading && (
        <div className="content">
          <ContactForm />
          <ContactFilter />
          {contacts.length > 0 && <ContactList />}
        </div>
      )}
    </>
  );
};

export default ContactsPage;
