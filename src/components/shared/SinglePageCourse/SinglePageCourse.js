import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBBtn } from 'mdb-react-ui-kit';

const SinglePageCourse = () => {
    const singleCourse = useLoaderData()
    console.log(singleCourse)
    const {_id,title,image_url,details} = singleCourse
  return (
    <div>
        <Card className='container'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className='text-center fs-1'>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      
        <Link to={`/checkout/${_id}`}> <MDBBtn size="lg">Get Premium</MDBBtn></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SinglePageCourse