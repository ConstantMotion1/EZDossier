import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PORTFOLIO } from "../utils/mutations";

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
  Text,
} from "./ContentElements";

const Content = () => {
  
  const [formState, setFormState] = useState({
    title: "",
    fullName: "",
    description: "",
    resume: "",
    contact: "",
    image: "",
    background: "",
    projects: "",
  });
  const [addTrait] = useMutation(ADD_PORTFOLIO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addTrait({
        variables: {
          title: formState.title,
          fullName: formState.fullName,
          description: formState.description,
          resume: formState.resume,
          contact: formState.contact,
          image: formState.image,
          background: formState.background,
          projects: formState.projects,
        },
      });
      const token = data.addTrait.token;
      Auth.login(token);
      
    } catch (err) {
      console.error(err);
    }}

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
            <Icon>EZ Dossier</Icon>
            <FormContent>
              <Form onSubmit={handleFormSubmit}>
                <FormH1> Please fill out Criteria</FormH1>
                <FormLabel htmlFor="for">Title:</FormLabel>
                <FormInput
                  type="title"
                  name="title"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">fullName:</FormLabel>
                <FormInput
                  type="fullName"
                  name="fullName"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Description:</FormLabel>
                <FormInput
                  type="description"
                  name="description"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Resume:</FormLabel>
                <FormInput
                  type="resume"
                  name="resume"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Contact:</FormLabel>
                <FormInput
                  type="contact"
                  name="contact"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Images:</FormLabel>
                <FormInput
                  type="images"
                  name="image"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Background:</FormLabel>
                <FormInput
                  type="background"
                  name="background"
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor="for">Projects:</FormLabel>
                <FormInput
                  type="projects"
                  name="projects"
                  onChange={handleChange}
                  required
                />
                <FormButton type="submit">Submit</FormButton>
                <Text>Make Portfolio!</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  };


export default Content;
