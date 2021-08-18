import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "/Users/User/Downloads/Todoclient/client/src/GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='firstName'
          onChange={(e) => {
            setFirstName(e.target.value);
          }} 
          />
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='lastName'
          onChange={(e) => {
            setLastName(e.target.value);
          }} 
          />
          <Form.Input 
          fluid icon='mail' 
          iconPosition='left' 
          placeholder='E-mail'
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => {
                setPassword(e.target.value);
              }}
          />

          <Button color='teal' fluid size='large' onClick={addUser}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  );
}
export default LoginForm;
