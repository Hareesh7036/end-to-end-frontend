'use client'
import React, { useState } from 'react'
import styles from './register.module.css'
import configuration from './configuration.json'
import { Input } from '@/inputControls/input'
import Link from 'next/link'
import { handleFieledvalidation, handleFormvalidation } from '@/validations/appvalidations'
import { Select } from '@/inputControls/select'
import { Textarea } from '@/inputControls/textArea'


export const Register = () => {
  const [inputControls, setInputControls]=useState(configuration);

  const handleChange=(eve)=>{
    const {name,value}=eve.target;
    setInputControls(handleFieledvalidation(eve,inputControls))
    
}
const handleRegister = () => {
  const [isFormInvalid, clonedInputControls, dataObj] = handleFormvalidation(inputControls)
  if (isFormInvalid) {
      setInputControls(clonedInputControls)
      return;
  }
  alert("sending requiest")
}

const prepareInputControls = (tag, obj) => {
  switch (tag) {
      case 'input':
          return <Input {...obj} handleChange={handleChange} />
      case 'select':
          return <Select {...obj} handleChange={handleChange} />
      default:
          return <Textarea  {...obj} handleChange={handleChange} />
  }
}

  return (
    <div className='container-fluid'>
        <h2 className={`text-center pt-3 mb-3`}>Login</h2>
    {
        inputControls?.map((obj,ind)=>{
          const {lbl,errorMessage,tag}=obj;
            return <div className='row mb-3' key={`in_${ind}`}>
                <div className='col-sm-4 text-end'>{lbl}</div>
                <div className='col-sm-4'>
                {prepareInputControls(tag, obj)}
                </div>
                <div className='col-sm-4 text-danger'>{errorMessage}</div>

            </div> 
        })
    }
    <div className='row'>
    <div className='offset-sm-4 col-sm-8'>
        <button className='btn btn-primary' onClick={handleRegister}>Register</button>
        <Link href='/' className=' m-2'>To Login</Link>
    </div>
    </div>
    </div>

  )
}
