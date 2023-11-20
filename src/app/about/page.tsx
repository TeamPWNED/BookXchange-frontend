import React from 'react'
import { Button } from "@/components/ui/button"
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const About = () => {
    return (
        <>
            <Header />
            About Us
            <Button variant='outline' size='lg'>Click me</Button>
            <Footer />
        </>
    )
}

export default About