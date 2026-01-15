import { observable } from '@legendapp/state';
import { Contact, Tags } from '../types/utils';

interface FilterContacts {
  filtered: Contact[];
  search: string;
  tagsFilter: Tags[];
  setSearch: (test: string) => void;
  setTagsFilter: (tag: Tags) => void;
}

export const filterContacts$ = observable<FilterContacts>({
  filtered: [],
  search: '',
  tagsFilter: [],

  setSearch(text) {
    filterContacts$.search.set(text);
  },

  setTagsFilter(tag) {
    if (filterContacts$.tagsFilter.get().includes(tag)) {
      const tags = filterContacts$.tagsFilter.get().filter((c) => c !== tag);
      filterContacts$.tagsFilter.set(tags as Tags[]);
    } else {
      const tags = [...filterContacts$.tagsFilter.get(), tag];
      filterContacts$.tagsFilter.set(tags as Tags[]);
    }
  },
});
