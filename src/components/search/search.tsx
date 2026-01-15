import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
  value: string;
  editable: boolean;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange, editable = false }: Props) => {
  return (
    <TextInput
      placeholder="Buscar contacto..."
      value={value}
      onChangeText={onChange}
      editable={editable}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    borderRadius: 8,
  },
});

export default Search;
