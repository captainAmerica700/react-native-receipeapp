import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

const useAuthForm = (schema: AnyObjectSchema) => {
  const { control, handleSubmit, formState: { errors }, setValue, watch,reset } = useForm({
    resolver: yupResolver(schema),
  });

  return { control, handleSubmit, errors, setValue, watch,reset };
};

export default useAuthForm;
