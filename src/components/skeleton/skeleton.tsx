import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, DimensionValue } from 'react-native';

interface SkeletonCardProps {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  style?: object;
}

const Skeleton = ({
  width = 150,
  height = 150,
  borderRadius = 12,
  style = {},
}: SkeletonCardProps) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, []);

  return (
    <Animated.View
      style={[styles.card, { width, height, borderRadius, opacity }, style]}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ddd',
  },
});

export default Skeleton;
