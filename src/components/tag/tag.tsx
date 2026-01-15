import { View, Text, StyleSheet, DimensionValue } from 'react-native';

interface Props {
  text: string;
  isActive?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
}

const Tag = ({
  text,
  isActive = false,
  width = 'auto',
  height = 'auto',
}: Props) => {
  return (
    <View style={[styles.tag, isActive && styles.activeTag, { width, height }]}>
      <Text style={[styles.text, isActive && styles.activeText]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
  },
  tag: {
    borderColor: '#5797ff',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  activeTag: {
    backgroundColor: '#5797ff',
  },
  text: {
    color: '#5797ff',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
});
export default Tag;
