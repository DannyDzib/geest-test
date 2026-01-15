import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { string } from 'yup';

interface Props {
  text: string;
  bgColor?: string;
  bgDisabled?: string;
  styles?: object;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = ({
  text,
  bgColor = '#57B9FF',
  bgDisabled = '#D3D3D3',
  styles,
  disabled,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        sx.button,
        { backgroundColor: disabled ? bgDisabled : bgColor },
        styles,
      ]}
    >
      <Text style={sx.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const sx = StyleSheet.create({
  button: { padding: 10, borderRadius: 5, marginTop: 15 },
  text: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
});

export default Button;
