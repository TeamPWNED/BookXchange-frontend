'use client'
import React from 'react'
import {Header} from '@/components/Header/Header'
import Footer from '@/components/footer/Footer'
import "./about.css"

const About = () => {
    return (

        <div className="about">
            <Header />
           <div className='abouthero pt-20'>
        <h1>Welcome to BookXchange!</h1>
        <h2>Our Story:</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At <span className='black'>BookXchange</span>, we believe in the power of sharing knowledge and fostering a community of book enthusiastis. Our journey began with a simple yet profound idea - to create a platform that not only connects readers but also promotes sustainability through the exchange of second-hand books.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Our <span className="black">Mission</span> is to make the joy of reading accessible to everyone while reducing the environmental impact of book consupmtion.We aim to provide a seamless and engaging experience for users to exchange their beloved books,discover new literary treasures, and connect with like-minded individuals.
        </p>

        <div>
            <h1>Meet Our Team:</h1>
            <div>
                aaryae
            </div>
            <div>
                anukul 
            </div>
            <div>
                bikalpa
            </div>
        </div>
           </div>
            <Footer />
            </div>
    
    )
}

export default About;