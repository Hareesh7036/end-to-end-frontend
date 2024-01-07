'use client'
import React, { useState } from 'react'
import styles from './login.module.css'
import configuration from './configuration.json'
import { Input } from '@/inputControls/input'
import { min5char } from '@/validations/appRegExp'
import {  handleFieledvalidation, handleFormvalidation } from '@/validations/appvalidations'

export const Login = () => {
    const [inputControls, setInputControls]=useState(configuration);
    const handleChange=(eve)=>{
        const {name,value}=eve.target;
        setInputControls(handleFieledvalidation(eve,inputControls))
        
    }
    const handleLogin =()=>{
        handleFormvalidation()
    }
  return (
    <div className='container-fluid'>
        <h2 className={`text-center pt-3 mb-3`}>Login</h2>
    {
        inputControls?.map(({lbl,tag,type,placeholder,errorMessage,value,criteria,model},ind)=>{
            return <div className='row mb-3' key={`in_${ind}`}>
                <div className='col-sm-4 text-end'>{lbl}</div>
                <div className='col-sm-4'>
                    <Input value={value} type={type} placeholder={placeholder} handleChange={handleChange} model={model} />
                    {/* <input type={type} value={value} placeholder={placeholder} className='form-control' onChange={handleChange} /> */}
                </div>
                <div className='col-sm-4 text-danger'>{errorMessage}</div>

            </div> 
        })
    }
    <div className='row'>
    <div className='offset-sm-4 col-sm-8'>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
        <a href='./register' className=' m-2'>Register page</a>
    </div>
    </div>
    </div>

  )
}
