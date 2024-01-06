'use client'
import React from 'react'
import { Header } from '@/components/Header/Header'
import Height100 from '@/components/Header/Height100'
import Footer from '@/components/footer/Footer'
import contactphoto from "../../assets/contactImg.jpg"
import "./contact.css"
import Image from 'next/image';

const Contact = () => {

  return (
    <>
      <Header />
      <Height100 />
      <div className="home-contact">
        <Image src={contactphoto} alt=" photo" width={400} style={{marginBottom:'50px'}}/>
        <div className="contact-info">
          <h1> Contact Us</h1>
          <div className="contact-box">
            <div className="content">
              <input type="text" placeholder="FullName" />
              <input type="email" name="email" id="email" placeholder="E-mail" />
              <input type="text" placeholder="message" />
              <button>Contact Us</button>
            </div>
            <div className="content-right">
              <h1>Contact</h1>
              <p>hi@lorem.com</p>
              <br />
              <h1>Based in </h1>
              <p>Nepal</p>
              <div className="contact-icons">
                <p>icon1</p>
                <p>icon2</p>
                <p>icon3</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact




