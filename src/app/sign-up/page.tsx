'use client';
import { Header } from '@/components/Header/Header';
import Height100 from '@/components/Header/Height100';
import Footer from '@/components/footer/Footer';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const SignUpForm = styled.form`
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

const Message = styled.p`
  color: #ff0000;
  margin-top: 10px;
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [isEligible, setIsEligible] = useState<Boolean>();

  const handleCheckEligibility = async (e:any) => {
    e.preventDefault();
    const apiUrl = 'endpoint';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setIsEligible(data.isEligible);
    } catch (error) {
      console.error('Error checking eligibility:', error);
      setIsEligible(false);
    }
  };

  return (
    <>
    <Header />
    <Height100 />
    <SignUpContainer>
      <SignUpForm>
        <Title>Sign Up</Title>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button onClick={handleCheckEligibility}>Check for Invitation</Button>
        {isEligible === false && <Message>You are not eligible for signing up.</Message>}
        {isEligible === true && (
          <>
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
            <Input type="tel" placeholder="Phone" required />
            <Input type="text" placeholder="Address" required />
            <Input type="text" placeholder="Gender" required />
            <Input type="text" placeholder="College" required />
            <Input type="text" placeholder="Faculty" required />
            <Input type="text" placeholder="Designation" required />
            <Button type="submit">Sign Up</Button>
          </>
        )}
      </SignUpForm>
    </SignUpContainer>
    <Footer/>
    </>
  );
};

export default SignUp;
