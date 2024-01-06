'use client';
import { Header } from '@/components/Header/Header'
import Height100 from '@/components/Header/Height100'
import Footer from '@/components/footer/Footer'
import { signIn } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useRouter();
  const handleSignIn = async (e: any) => {
    e.preventDefault()
    try {
      const { access, refresh } = await signIn(email, password);
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      navigate.push('/store');
    } catch (error) {
      console.log(error);

    }
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
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
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