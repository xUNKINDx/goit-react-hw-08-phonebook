import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'store/filters/filtersSlice';
import { selectContactsFilter } from 'store/filters/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label className='label'>
          Find contacts by name
          <input
            onChange={handleChange}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
          />
        </label>
      </div>
    </>
  );
};

export default Filter;
