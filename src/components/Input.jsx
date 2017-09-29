import React from 'react'

const Input = ({label, handleChange, value, name, type}) => {
  return(
    <div className="field">
      <label>{label}</label><br/>
      <input type={type} name={name} onChange={handleChange} value={value}/>
    </div>
  )
}

export default Input
