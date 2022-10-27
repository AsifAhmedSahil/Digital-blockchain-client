import React, { useState } from 'react'
// import Footer from '../shared/Footer/Footer'
// import Header from '../shared/Header/Header'
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
// export default function App() {
//   const [collapse1, setCollapse1] = useState(false);
//   const [collapse2, setCollapse2] = useState(false);
//   const [collapse3, setCollapse3] = useState(false);

//   const toggleCollapse1 = () => setCollapse1(!collapse1);
//   const toggleCollapse2 = () => setCollapse2(!collapse2);
//   const toggleCollapse3 = () => setCollapse3(!collapse3);
const Faq = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);
  return (
    <div>
        
        <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBListGroup>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse1} action>
          <MDBTypography tag="h5">Question 1</MDBTypography>
          <p className="mb-1">What can this app do?</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse1}>
            This is a Course selling Website, which provide blockchain related course.
            Blockchain courses offered through Coursera enable learners to gain knowledge on foundational blockchain concepts; skill sets for designing and implementing smart contracts; methods for developing decentralized applications on the blockchain; and information about ongoing specific industry-wide blockchain frameworks.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse2} action>
          <MDBTypography tag="h5">Question 2</MDBTypography>
          <p className="mb-1">Which Framework we provide?</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse2}>
            we caxn build this app by using react js ,express js,node js & some others.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse3} action>
          <MDBTypography tag="h5">Question 3</MDBTypography>
          <p className="mb-1">where this app deploy?</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse3}>
            This app deploy in vercel which is backend part and the frontend part is deploy in firebase.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
        
        
        </div>
  )
}

export default Faq