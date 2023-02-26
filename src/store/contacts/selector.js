import { createSelector } from '@reduxjs/toolkit';
import { selectContactsFilter } from '../filters/selector';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  }
);
