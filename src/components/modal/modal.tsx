import { ReactNode } from 'react';
import { Modal, View, StyleSheet, Button } from 'react-native';
import { DimensionValue } from 'react-native';

type Size = 'small' | 'medium' | 'large' | 'full';

interface Props {
  isVisible: boolean;
  size?: Size;
  children: ReactNode;
  onClose: () => void;
}

const ModalComponent = ({
  isVisible = false,
  size = 'medium',
  children,
  onClose,
}: Props) => {
  const widthSize: Record<Size, DimensionValue> = {
    small: 250,
    medium: 350,
    large: 400,
    full: '100%',
  };
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.content}>
        <View style={[styles.children, { width: widthSize[size] }]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: 350,
  },
});

export default ModalComponent;
