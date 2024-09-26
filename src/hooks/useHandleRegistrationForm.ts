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
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      reset();
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
}
