import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contact$ } from '../../../../store/contacts';
import { Contact } from '../../../../types/utils';
import { useModal } from '../../../../components/modal';

const useCreateContactForm = () => {
  const { close } = useModal();

  const contactSchema = yup.object({
    name: yup
      .string()
      .trim()
      .required('Nombre requerido')
      .min(2, 'Mínimo 2 caracteres')
      .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras'),
    email: yup.string().required('Email requerido').email('Email inválido'),
    phone: yup
      .string()
      .required('Teléfono requerido')
      .min(10, 'Mínimo 10 dígitos')
      .matches(/^\d+$/, 'El teléfono solo puede tener números'),
    department: yup.string().required('Departamento requerido'),
  });

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (contact: Contact) => {
    contact$.add(contact);
    close();
  };

  return { control, handleSubmit, formState, onSubmit, close };
};

export default useCreateContactForm;
