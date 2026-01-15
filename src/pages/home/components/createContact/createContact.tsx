import { StyleSheet, Text, View } from 'react-native';
import FormSelect from '../../../../components/formSelect';
import FormInput from '../../../../components/formInput';
import Button from '../../../../components/button';
import { Tags } from '../../../../types/utils';
import useCreateContactForm from './useCreateContactForm';

interface Options {
  label: Tags;
  value: Tags;
}

const CreateContact = () => {
  const { control, handleSubmit, formState, onSubmit, close } =
    useCreateContactForm();

  const options: Options[] = [
    { label: 'Ventas', value: 'Ventas' },
    { label: 'Desarrollo', value: 'Desarrollo' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Soporte', value: 'Soporte' },
  ];

  return (
    <View>
      <Text style={style.title}>Crear nuevo contacto</Text>
      <View style={style.contentInputs}>
        <FormInput control={control} label="Nombre" name="name" />
        <FormInput
          control={control}
          label="Correo"
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <FormInput
          control={control}
          label="Telefono"
          name="phone"
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={10}
        />

        <FormSelect
          control={control}
          name="department"
          label="Departamento"
          options={options}
        />

        <Button
          text="GUARDAR"
          disabled={!formState.isValid}
          onPress={handleSubmit(onSubmit)}
        />
        <Button text="CERRAR" bgColor="#495057" onPress={close} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 22, marginVertical: 10 },
  contentInputs: { marginVertical: 10, gap: 10 },
});

export default CreateContact;
