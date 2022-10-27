import React from "react";

import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div className="container ">
      <h2 className="text-center mt-5 mb-5">Some Important Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is a protocol that enables
            scripts running on a browser client to interact with resources from
            a different origin. This is useful because, thanks to the
            same-origin policy followed by XMLHttpRequest and fetch, JavaScript
            can only make calls to URLs that live on the same origin as the
            location where the script is running. For example, if a JavaScript
            app wishes to make an AJAX call to an API running on a different
            domain, it would be blocked from doing so thanks to the same-origin
            policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Google Firebase offers many features that pitch it as the go-to
            backend development tool for web and mobile apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is simple, lightweight, friendly, and industrially
            recognized.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The react private route component renders a route component if the
            user is logged in and in an authorised role for the route, if the
            user isn’t logged in they’re redirected to the /login page, if the
            user is logged in but aren’t in an authorised role they’re
            redirected to the home page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node.js is a JavaScript runtime used to create scalable server-side
            and networking applications via virtual private servers. It offers
            non-blocking input/output (I/O) operations and is built on
            event-driven, asynchronous architecture to help developers create
            various projects efficiently and easily.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
