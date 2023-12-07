'use client';
import { Header } from '@/components/Header/Header'
import Height100 from '@/components/Header/Height100'
import Footer from '@/components/footer/Footer'
import React from 'react'
import styled from 'styled-components';

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const SignInForm = styled.form`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  color: #000;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignIn = () => {
  const handleSignIn = (e: any) => {
    e.preventDefault();
    // Add your sign-in logic here
  };
  return (
    <>
      <Header />
      <Height100 />
      <SignInContainer>
        <SignInForm onSubmit={handleSignIn}>
          <Title>Sign In</Title>
          <Input
            type="email"
            placeholder="Email Address"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            required
          />
          <Button type="submit">Sign In</Button>
        </SignInForm>
      </SignInContainer>

      <Footer />
    </>
  )
}

export default SignIn