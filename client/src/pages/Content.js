import React from "react";
import { useNavigate } from "react-router-dom";


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
  Text
} from './ContentElements';

const Content = () => {
  const navigate = useNavigate() 
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>EZ Dossier</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1> Please fill out Criteria</FormH1>
              <FormLabel htmlFor='for'>Title:</FormLabel>
              <FormInput type='title' required />
              <FormLabel htmlFor='for'>Name:</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Description:</FormLabel>
              <FormInput type='description' required />
              <FormLabel htmlFor='for'>Resume:</FormLabel>
              <FormInput type='resume' required />
              <FormLabel htmlFor='for'>Contact:</FormLabel>
              <FormInput type='contact' required />
              <FormLabel htmlFor='for'>Images:</FormLabel>
              <FormInput type='images' required />
              <FormLabel htmlFor='for'>Background:</FormLabel>
              <FormInput type='background' required />
              <FormLabel htmlFor='for'>Projects:</FormLabel>
              <FormInput type='projects' required />
              <FormButton onClick={()=>navigate('/finalrender')} type='submit'>Continue</FormButton>
              {/* <Formbutton onClick={()=>navigate('/finalrender')}>Make Portfolio!</Formbutton> */}
              <Text>Make Portfolio!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

// export default function Content() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h2>Please fill out Criteria</h2>
//       <div>
//         <h4>title:</h4>
//         <input/>
//       </div>
//       <div>
//         <h4>name:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>description:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>resume:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>contact:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>image:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>background:</h4>
//         <input />
//       </div>
//       <div>
//         <h4>projects:</h4>
//         <input />
//       </div>
//       <button onClick={()=>navigate('/finalrender')}>Make Portfolio!</button>
//     </div>
//   );
// }

export default Content;