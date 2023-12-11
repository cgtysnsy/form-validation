"use client"
import React, { useState } from 'react'

interface FormData {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Form: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({ name: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
  const [inputChecker, setInputChecker] = useState<boolean>(false);
  const [formChecker, setFormChecker] = useState<boolean>(false)

    const emailRegex = /\S+@\S+\.\S+/;
    
  const nameReminder = "First Name can not be empty"
  const lastNameReminder = "Last Name can not be empty"
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

        if (e.target.name === 'email') {
            if (!emailRegex.test(e.target.value)) {
              setEmailError('Invalid email format');
            } else {
              setEmailError('');
            }
        }
        
        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
              setPasswordError('Passwords do not match');
            } else {
              setPasswordError('');
            }
        }
        
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
      setInputChecker(true)
            if (!emailRegex.test(formData.email)) {
              setEmailError('Invalid email format');
            } else {
              setEmailError('');
            }
   
            if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
              setPasswordError('Passwords do not match');
            } else {
              setPasswordError('');
            }

        if (emailError || passwordError || !formData.name || !formData.lastName) {
          setFormChecker(true)
            return;
          }else{ setFormChecker(false)}
    }
    console.log(formData)
    return (
      <form onSubmit={handleSubmit}>
      
          <label htmlFor='name'>First Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {inputChecker && !formData.name  && <div style={{color:"red"}}>{nameReminder}</div>}
          <label htmlFor='lastName'>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {inputChecker && !formData.lastName  && <div style={{color:"red"}}>{lastNameReminder}</div>}
          <label htmlFor='email'>Email Address</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {emailError && inputChecker &&  <div style={{color:"red"}}>{ emailError}</div>}
          <label htmlFor='password'>Password</label>
            <input type="text" name='password' value={formData.password} onChange={handleChange}/>
          <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {passwordError  && inputChecker &&  <div style={{color:"red"}}>{ passwordError}</div>}
        <button>Register</button>
        {formChecker && <div  style={{color:"red"}}>Please fill the fields</div>}
    </form>
  )
}

export default Form
