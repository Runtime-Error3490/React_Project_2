import React from 'react'
import style from './Contact.module.css'
import Button from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { PiChatCenteredDotsBold } from "react-icons/pi";
export default function ContactForm() {
  return (
    <section className={`${style.container}`}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<IoIosCall fontSize="24px" />}
          />

        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<CiMail fontSize="24px" />}
        />
        <form>
          <div className={style.form_controller}>
            <label for="name">Name</label>
            <input type='text' />
          </div>
          <div className={style.form_controller}>
            <label for="email">Email</label>
            <input type='email' />
          </div>
          <div className={style.form_controller}>
            <label for="text">Text</label>
            <textarea name='text' rows="8"/>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
          <Button
            text="Submit"
            icon={<PiChatCenteredDotsBold fontSize="24px" />}
          />
          </div>
        </form>
      </div>
      <div className={style.contact_Image}>
        <img src="/photos/Service 24_7-pana 1.svg" alt="contact" />
      </div>
    </section>
  )
}
