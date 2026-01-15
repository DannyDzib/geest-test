import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Select from '../select';

type Props = {
  control: Control<any>;
  name: string;
  options: any[];
  label?: string;
  placeholder?: string;
};

const FormSelect = ({ options, control, name, label, placeholder }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Select
          label={label}
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          error={error?.message}
        />
      )}
    />
  );
};

export default FormSelect;
