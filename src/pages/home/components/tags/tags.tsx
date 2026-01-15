import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Tags as TagsType } from '../../../../types/utils';
import Tag from '../../../../components/tag';

const tags: TagsType[] = ['Ventas', 'Desarrollo', 'Marketing', 'Soporte'];

interface Props {
  filter: TagsType[];
  onPress: (tag: TagsType) => void;
}

const Tags = ({ filter, onPress }: Props) => {
  return (
    <View style={styles.content}>
      {tags.map((tag) => {
        const isActive = filter.includes(tag);

        return (
          <TouchableOpacity
            key={tag}
            onPress={() => onPress(tag)}
            activeOpacity={0.7}
          >
            <Tag text={tag} isActive={isActive} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
  },
});

export default Tags;
