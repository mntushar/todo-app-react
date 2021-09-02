import React, { Fragment, useState, useEffect } from 'react'
import { Button, Form, } from 'react-bootstrap';
import validator from 'validator'


export default function Login() {
    const [email, setEmail] = useState('')
    const [errorEmail, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [errorPassword, setPasswordError] = useState(false)
    const [validation, setValidation] = useState(false)

    // handle email field
    const handelEmail = (event) => {
      setEmail(event.target.value)
    } 

    // check email field validation
    useEffect(()=>{
      setEmailError(validator.isEmail(email))
    },[email])

    // handle password field
    const handelPassword = (event) => {
        setPassword(event.target.value)
     } 
    
    //  check password field validation
    useEffect(()=>{
      setPasswordError((validator.isStrongPassword(password)))
    },[password])

    // check validation and active submit button
    useEffect(()=>{
      if (errorEmail && errorPassword == true){
        setValidation(true)
      }
      else{
        setValidation(false)
      }
    }, [errorEmail, errorPassword])

    // save data in session
     const handelSubmit = () =>{
        sessionStorage.setItem("username", email);
     }

    return (
        <div className='my_form container center_div'>
            <h3 className='text-center mt-2'>Login Form</h3>
            <Form action='/'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={handelEmail} placeholder="Enter email" required />
                  <Form.Text className="text-muted">
                  { errorEmail 
                  ? 
                  <span className='text-danger'></span>
                  :
                  <span className='text-danger'>* Enter valid email..</span>
                }
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={handelPassword} placeholder="Password" required />
                  <Form.Text className="text-muted">
                  {errorPassword ?
                    <span className='text-danger'></span>
                    :
                    <span className='text-danger'>* Use 8 or more characters with a mix of Lowercase Uppercase letters, numbers & symbols..</span>
                  }
                  </Form.Text>
                </Form.Group>
                { validation ? 
                  <Button variant="primary" disabled={false} onClick={handelSubmit} type="submit">Submit</Button> 
                  :
                  <Button variant="primary" disabled={true} onClick={handelSubmit} type="submit">Submit</Button>}
            </Form>
        </div>
    )
}
