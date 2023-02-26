import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'store/contacts/operation';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      <Contacts />
    </>
  );
};

export default App;
