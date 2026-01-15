import { Text, View, FlatList, StyleSheet } from 'react-native';
import { type Contact } from '../../../../types/utils';
import Card from '../../../../components/card';

interface Props {
  contacts: Contact[];
}

const Contacts = ({ contacts }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Total: {contacts.length}</Text>

      {!contacts.length ? (
        <Text style={styles.empty}>EmptyState</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(_, i) => i.toString()}
          numColumns={2}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({ item }) => <Card contact={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  counter: {
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'right',
    fontWeight: '500',
  },
  empty: {
    margin: 'auto',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Contacts;
