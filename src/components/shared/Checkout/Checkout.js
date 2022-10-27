import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const Checkout = () => {
  const check = useLoaderData();
  const { title, image_url } = check;
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <p>
                <span className="h2">Buy Courses </span>
                <span className="h4">(1 item in your cart)</span>
              </p>

              <MDBCard className="mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="align-items-center">
                    <MDBCol md="2">
                      <MDBCardImage
                        fluid
                        src={image_url}
                        alt="Generic placeholder image"
                      />
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Name</p>
                        <p className="lead fw-normal mb-0">{title}</p>
                      </div>
                    </MDBCol>

                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                        <p className="lead fw-normal mb-0">1</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Total</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-5">
                <MDBCardBody className="p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">$799</span>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <div className="d-flex justify-content-end">
                <Link to="/courses">
                  {" "}
                  <MDBBtn size="lg">Add to cart</MDBBtn>
                </Link>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Checkout;
