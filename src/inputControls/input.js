'use client'
import React, { Fragment } from 'react'

export const Input = ({type,value,placeholder,handleChange,model}) => {
  return (
    <Fragment>
        <input name={model} type={type}  placeholder={placeholder} className='form-control' onChange={handleChange} />
    </Fragment>
  )
}
