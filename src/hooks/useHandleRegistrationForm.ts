import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInterface } from '../models/FormInterface';
import { userSchema } from '../validation/schema';
import { useNavigate } from 'react-router-dom';

export default function useHandleRegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInterface>({ resolver: yupResolver(userSchema), mode: 'onChange' });

  const onSubmit = async (data: FormInterface) => {
    navigate('/');
    reset();
    console.log(data);
  };
  return { register, handleSubmit, errors, isValid, onSubmit };
}
