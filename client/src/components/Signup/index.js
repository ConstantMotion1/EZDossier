import React from 'react';
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
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>EZ Dossier</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
