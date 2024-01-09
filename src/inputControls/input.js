"use client"
import React, { Fragment } from 'react'

export const Input = ({ type, value, handleChange, model, options, values }) => {

    switch (type) {
        case 'text':
          return (
            <Fragment>
                <input name={model} onChange={handleChange} className='form-control' type={type} />
            </Fragment>
        )
        case 'password':
          return (
            <Fragment>
                <input name={model} onChange={handleChange} className='form-control' type={type} />
            </Fragment>
        )
        case 'date':
            return (
                <Fragment>
                    <input name={model} onChange={handleChange} className='form-control' type={type} />
                </Fragment>
            )
        case 'radio':
            return (
                <Fragment>
                    {
                        options.map((val,ind) => {
                          
                            return <div key={`ra_${ind}`}>
                              <input  className="ms-3" name={model} onChange={handleChange} type={type} /> {val}
                            </div>
                        })
                    }
                </Fragment>
            )
        case 'checkbox':
            return (
                <Fragment>
                    {
                        options.map((val,ind) => {
                            return <div key={`cb_${ind}`}>
                              <input  className="ms-3" name={model} onChange={handleChange} type={type} /> {val}
                            </div>
                        })
                    }
                </Fragment>
            )
    }

}

