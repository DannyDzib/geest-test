import { StyleSheet, View } from 'react-native';
import Skeleton from '../../../../components/skeleton/skeleton';

const SkeletonTags = () => {
  const data = Array.from({ length: 4 });

  return (
    <View style={styles.content}>
      {data.map((_, idx) => (
        <Skeleton key={idx} width={100} height={30} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flexDirection: 'row', marginHorizontal: 10, gap: 5 },
});

export default SkeletonTags;
