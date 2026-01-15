import { observable } from '@legendapp/state';
import uuid from 'react-native-uuid';
import { Contact } from '../types/utils';
import contactsData from '../storage/data.json';

interface ContactStore {
  contacts: Contact[];
  isLoading: boolean;
  add: (contact: Contact) => void;
}

export const contact$ = observable<ContactStore>({
  contacts: contactsData || [],
  isLoading: true,

  add(contact) {
    contact$.isLoading.set(true);
    const id = uuid.v4();
    contact$.contacts.set([...contact$.contacts.get(), { id, ...contact }]);
    setTimeout(() => {
      contact$.isLoading.set(false);
    }, 3000);
  },
});
