import { View } from 'react-native';
import { Contact, Tags as TagsType } from '../../types/utils';
import useContactsHandler from './useContactsHandler';
import CreateContact from './components/createContact';
import Contacts from './components/contacts';
import Tags from './components/tags';
import CreateContactAction from './components/createContactAction';
import { SkeletonCards, SkeletonTags } from './components/skeletons';
import { useModal } from '../../components/modal';
import Search from '../../components/search';

const Home = () => {
  const { open } = useModal();
  const { data, loading, search, setSearch, tagsFilter, setTagsFilter } =
    useContactsHandler();

  const createContact = () => open({ content: <CreateContact /> });

  return (
    <View style={{ flex: 1 }}>
      <Search value={search} onChange={setSearch} editable={!loading} />

      {loading ? (
        <SkeletonTags />
      ) : (
        <Tags filter={tagsFilter as TagsType[]} onPress={setTagsFilter} />
      )}

      <CreateContactAction onPress={createContact} disabled={loading} />

      {loading ? <SkeletonCards /> : <Contacts contacts={data as Contact[]} />}
    </View>
  );
};

export default Home;
