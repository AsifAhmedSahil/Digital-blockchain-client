import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../Header/Header'


const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
    <Header/>
      <div className='container text-center mt-5 pt-5 text-danger '>
        <h1  >Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p >{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
