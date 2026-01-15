import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface FormInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  label?: string;
}

const FormInput = ({ name, control, label, ...inputProps }: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}

          <TextInput
            value={value}
            onChangeText={onChange}
            style={[styles.input, error && styles.inputError]}
            {...inputProps}
          />

          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#F2F2F7',
    color: '#111',
  },
  inputError: {
    borderColor: '#ff4d4f',
  },
  errorText: {
    marginTop: 4,
    color: '#ff4d4f',
    fontSize: 12,
  },
});

export default FormInput;
