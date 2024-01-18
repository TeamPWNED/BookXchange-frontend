'use client'
import React from 'react'
import {Header} from '@/components/Header/Header'
import Footer from '@/components/footer/Footer'
import "./about.css"
import Image from 'next/image'
import aarya from "../../assets/aarya.png"
import anukul from "../../assets/anukul.png"
import bikalpa from "../../assets/bikalpa.png"

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

        <div className='intro'>
            <h2 className='text-center mt-10 mb-10'>Meet Our Team:</h2>
            <div className="images">
            <div className='character'>
                <a href="https://www.linkedin.com/in/aarya-dangol-658871273/" target="_blank">
                <p>Aarya Dangol</p>
              
                <Image className='characterimage'
                src={aarya}
                alt='aarya'
                height='30'
                />
                </a>
                
            </div>
            <div className='character'>
                <a href="https://www.linkedin.com/in/beinganukul/" target="_blank">
                <p>Anukul Adhikari</p>
               
                <Image className='characterimage'
                src={anukul}
                alt='anukul'
                height='30'
                />
              </a>
            </div>
            <div className='character'>
                <a href="https://www.linkedin.com/in/bikk-ups/" target="_blank">
                <p>Bikalpa Sharma</p>
               
                <Image className='characterimage'
                src={bikalpa}
                alt='bikalpa'
                height='30'
                />
               </a>
            </div>
            </div>
        </div>
           </div>
            <Footer />
            </div>
    
    )
}

export default About;