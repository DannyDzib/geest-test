import { StyleSheet } from 'react-native';
import Button from '../../../../components/button';

interface Props {
  createText?: string;
  disabled?: boolean;
  onPress?: () => void;
}
const CreateContactAction = ({
  createText = 'Nuevo contacto',
  disabled = false,
  onPress,
}: Props) => {
  return (
    <Button
      text={createText}
      disabled={disabled}
      styles={styles.button}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: { width: '95%', margin: 'auto' },
});

export default CreateContactAction;
