import React from 'react'
import { InputProps } from './Input.interface'

const  Input:React.FC<InputProps>=({placeholder,type,customStyle,value,onChange})=> {
  return (
    <>
    <input type={type} placeholder={placeholder} className={customStyle} value={value} onChange={onChange}/>
    </>
  )
}

export default Input