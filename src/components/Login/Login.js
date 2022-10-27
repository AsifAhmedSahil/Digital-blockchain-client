import React, { useContext, useState } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error,setError] = useState("")
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  // const {providerLogin} = useContext(AuthContext);

  // const googleProvider = new GoogleAuthProvider()

  // const handleGoogleSignIn = () =>{
  //   providerLogin(googleProvider)
  //   .then(result =>{
  //     const user = result.user;
  //     console.log(user)
  //   })
  //   .catch(error => console.error(error))
  // }

  const handleSubmit = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 

    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError("")
      navigate("/")
    })
    .catch(error => {
      console.error(error)
      setError(error.message);
    })
  }
  return (
    // <MDBContainer fluid className="p-3 my-5 h-custom container ">

    //   <MDBRow>

    //     <MDBCol col='10' md='6'>
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
    //     </MDBCol>

    //     <MDBCol col='4' md='6'>

    //       <div className="d-flex flex-row align-items-center justify-content-center">

    //         <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            

    //         <MDBBtn floating size='md' tag='a'  className='me-2' onClick={handleGoogleSignIn}>
    //           {/* <MDBIcon fab icon='twitter' /> */}
    //           google
    //         </MDBBtn>

           

    //       </div>

    //       <div className="divider d-flex align-items-center my-4">
    //         <p className="text-center fw-bold mx-3 mb-0">Or</p>
    //       </div>

    //       <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    //       <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    //       <div className="d-flex justify-content-between mb-4">
    //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    //         <a href="!#">Forgot password?</a>
    //       </div>

    //       <div className='text-center text-md-start mt-4 pt-2'>
    //         <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
    //         <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="register" className="link-danger">Register</a></p>
    //       </div>

    //     </MDBCol>

    //   </MDBRow>

      

    // </MDBContainer>

    <Form className='container' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
  )
}

export default Login