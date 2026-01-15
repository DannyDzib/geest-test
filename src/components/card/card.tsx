import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { type Contact } from '../../types/utils';
import Tag from '../tag';

interface Props {
  contact: Contact;
}

const TextLabel = ({ label, text }: any) => (
  <View>
    <Text style={styles.text}>{label}: </Text>
    <Text>{text}</Text>
  </View>
);

const Card = ({ contact }: Props) => {
  return (
    <View style={styles.box}>
      <TextLabel label="Nombre" text={contact.name} />
      <TextLabel label="Correo" text={contact.email} />
      <TextLabel label="Numero" text={`${'+52'} ${contact.phone}`} />
      <TextLabel label="Departamento" text={contact.department} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    boxShadow: '0 0 15px 0 #ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    gap: 10,
  },
  text: {
    fontWeight: '600',
  },
});

export default Card;
