import React, { useState } from 'react';
import { View, Text, Modal, Pressable, FlatList } from 'react-native';
import styles from './styles';

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  value: string | null;
  options: Option[];
  label?: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

const Select = ({
  value,
  options,
  label = '',
  placeholder = 'Selecciona una opción',
  error,
  onChange,
}: SelectProps) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? placeholder;

  return (
    <>
      <View>
        <Text style={[styles.label]}>{label}</Text>
        <Pressable style={styles.input} onPress={() => setVisible(true)}>
          <Text style={[styles.inputText, !value && { color: '#999' }]}>
            {selectedLabel}
          </Text>
          <Text style={styles.arrow}>▼</Text>
        </Pressable>
        {!!error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default Select;
