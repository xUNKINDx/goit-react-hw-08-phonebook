import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operation';
import { selectIsLoading } from 'store/contacts/selector';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
        <title>Contacts</title>
      {/* </Helmet> */}
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      <Contacts />
    </>
  );
};

export default ContactsPage;
