import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_PROFILE } from '../../utils/mutations';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  
} from './SignupElements';

const SignUp = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addProfile] = useMutation(ADD_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addProfile({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = JSON.stringify(mutationResponse.data.addProfile.token);
    Auth.login(token);
    window.location.replace('/')
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>EZ Dossier</Icon>
          <FormContent>
            <Form onSubmit={handleFormSubmit}>
              <FormH1>Sign up</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
              <FormInput type='firstName' name='firstName' onChange={handleChange} required />
              <FormLabel htmlFor='for'>Last Name</FormLabel>
              <FormInput type='lastName' name='lastName' onChange={handleChange} required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' name='email' onChange={handleChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' name='password' onChange={handleChange} required />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
