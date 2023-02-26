import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/operation';
import { selectContacts } from 'store/contacts/selector';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = event.target;

    if (contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name.value, number: number.value }));

    event.target.reset();
  };

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          style={{ width: '140px', margin: '20px auto', padding: '8px' }}
          type="submit"
          name="addContact"
        >
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
