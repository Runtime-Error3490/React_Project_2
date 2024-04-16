import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import style from './Button.module.css'
export default function Button(props) {
    const {isOutline,icon,text}=props
  return (
    <button className={isOutline ?style.outline_btn:style.primary_btn}>
        {icon}
        {text}
    </button>
  )
}
