import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserInterface from '../models/UserInterface';
import { userSchema } from '../validation/schema';
import { useNavigate } from 'react-router-dom';
import useExtractEventId from './useExtractEventId';
import { useState } from 'react';

export default function useHandleRegistrationForm() {
  const navigate = useNavigate();
  const eventId = useExtractEventId() || '';
  const [error, setError] = useState<string | null>(null);

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
        if (response.status === 400) {
          setError('This email is already registered. Please use a different email.');
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
        return;
      }

      reset();
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit, error };
}
