import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Skeleton from '../../../../components/skeleton/skeleton';

const SkeletonGrid = () => {
  const data = Array.from({ length: 8 });

  return (
    <View style={styles.container}>
      <View style={styles.counterContent}>
        <Skeleton width={70} height={20} style={styles.counter} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={() => (
          <Skeleton width="45%" height={200} style={{ margin: 10 }} />
        )}
        style={styles.contacts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  counterContent: { flexWrap: 'wrap-reverse' },
  counter: { marginHorizontal: 10, marginTop: 10 },
  contacts: { gap: 20 },
});

export default SkeletonGrid;
