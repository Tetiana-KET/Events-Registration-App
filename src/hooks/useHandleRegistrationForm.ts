import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInterface } from '../models/UserInterface';
import { userSchema } from '../validation/schema';
import { useNavigate } from 'react-router-dom';
import useExtractEventId from './useExtractEventId';

export default function useHandleRegistrationForm() {
  const navigate = useNavigate();
  const eventId = useExtractEventId() || '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<UserInterface>({ resolver: yupResolver(userSchema), mode: 'onChange' });

  const onSubmit = async (data: UserInterface) => {
    const dataWithEventId = { ...data, eventId };
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithEventId),
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
