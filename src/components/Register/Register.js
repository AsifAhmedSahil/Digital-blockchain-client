import React, { useContext, useState } from 'react'
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBInput,
//     MDBCheckbox,
//     MDBIcon
//   }
//   from 'mdb-react-ui-kit';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Register = () => {
  const [error,setError] = useState("")
  const {createUser} = useContext(AuthContext)
  
const navigate = useNavigate()

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value; 
    console.log(name,email,password,photoURL);

    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError("")
      navigate("/login")
    })
    .catch(error => 
      {
        console.error(error)
        setError(error.message)
      }
      )
  }
  return (
  //   <MDBContainer onClick={handleSubmit} fluid className='p-4 container mt-5'>

  //   <MDBRow>

  //     <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

  //       <h1 className="my-5 display-3 fw-bold ls-tight px-3">
  //         The best offer <br />
  //         <span className="text-primary">for your business</span>
  //       </h1>

  //       <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Eveniet, itaque accusantium odio, soluta, corrupti aliquam
  //         quibusdam tempora at cupiditate quis eum maiores libero
  //         veritatis? Dicta facilis sint aliquid ipsum atque?
  //       </p>

  //     </MDBCol>

  //     <MDBCol md='6'>

  //       <MDBCard className='my-5'>
  //         <MDBCardBody className='p-5'>

  //           <MDBRow>
  //             <MDBCol col='12'>
  //               <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
  //             </MDBCol>

              
  //           </MDBRow>

  //           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
  //           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

  //           <div className='d-flex justify-content-center mb-4'>
  //             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
  //           </div>

  //           <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
  //           <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="login" className="link-danger">Login</a></p>

  //           <div className="text-center">

  //             <p>or sign up with:</p>

  //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  //               <MDBIcon fab icon='facebook-f' size="sm"/>
  //             </MDBBtn>

  //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  //               <MDBIcon fab icon='twitter' size="sm"/>
  //             </MDBBtn>

  //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  //               <MDBIcon fab icon='google' size="sm"/>
  //             </MDBBtn>

  //             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  //               <MDBIcon fab icon='github' size="sm"/>
  //             </MDBBtn>

  //           </div>

  //         </MDBCardBody>
  //       </MDBCard>

  //     </MDBCol>

  //   </MDBRow>

  // </MDBContainer>

  <Form onSubmit={handleSubmit} className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Enter Your Photo Url" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter Your Email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
  )
}

export default Register