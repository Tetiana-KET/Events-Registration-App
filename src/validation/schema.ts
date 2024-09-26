import * as yup from 'yup';

import {
  MAIL_VALIDATION_REG,
  MIN_LENGTH,
  NO_RUSSIAN_LETTERS_REG,
  WHITESPACE_REG,
  MIN_AGE,
  FULL_NAME,
} from '../consts/validationConsts';

const today = new Date();
const minDate = new Date(today.getFullYear() - MIN_AGE, today.getMonth(), today.getDate());

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .matches(NO_RUSSIAN_LETTERS_REG, 'Please use latin alphabet')
    .min(MIN_LENGTH, `Should contain at least ${MIN_LENGTH} symbols`)
    .test('is full name', 'Should contain first and last name.', (value) => {
      return FULL_NAME.test(value || '');
    })
    .test('is-uppercase', 'Each name should start with uppercase', (value) => {
      return /^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(value || '');
    }),
  email: yup
    .string()
    .trim()
    .matches(NO_RUSSIAN_LETTERS_REG, 'Please use latin alphabet')
    .min(MIN_LENGTH, `Should be at least ${MIN_LENGTH} characters long`)
    .required('Email is required')
    .test('has-whitespace', 'Should not contain whitespace', (value) => {
      return WHITESPACE_REG.test(value || '');
    })
    .matches(MAIL_VALIDATION_REG, 'Incorrect format (e.g., user@example.com)'),
  cameFrom: yup.string().required('Please select an option'),
  birthDate: yup.date().max(minDate, 'You must be at least 18 years old').required('Birth date is required'),
});
