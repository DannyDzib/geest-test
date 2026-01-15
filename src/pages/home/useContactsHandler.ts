import { useEffect } from 'react';
import { useSelector } from '@legendapp/state/react';
import { Tags, Contact } from '../../types/utils';
import { contact$ } from '../../store/contacts';
import { filterContacts$ } from '../../store/filtersContacts';

const useContactsHandler = () => {
  const contacts = useSelector(contact$.contacts);
  const loading = useSelector(contact$.isLoading);
  const data = useSelector(filterContacts$.filtered);
  const search = useSelector(filterContacts$.search);
  const tagsFilter = useSelector(filterContacts$.tagsFilter);

  useEffect(() => {
    const time = setTimeout(() => {
      contact$.isLoading.set(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    if (search || tagsFilter.length) {
      const lowerSearch = search.toLowerCase();

      const filter = contacts
        .filter((contact) =>
          tagsFilter.length
            ? tagsFilter.includes(contact?.department as Tags)
            : true,
        )
        .filter((c) => c?.name.toLowerCase().includes(lowerSearch));

      filterContacts$.filtered.set(filter as Contact[]);
    } else {
      filterContacts$.filtered.set(contacts as Contact[]);
    }
  }, [search, tagsFilter, contacts]);

  return {
    data,
    loading,
    search,
    tagsFilter,
    setSearch: filterContacts$.setSearch,
    setTagsFilter: filterContacts$.setTagsFilter,
  };
};

export default useContactsHandler;
