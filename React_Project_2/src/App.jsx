import React from 'react'
import Navbar from './components/Navigation/Navbar'
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
export default function App() {
  return (
    <>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}
