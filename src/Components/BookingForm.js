import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";

const BookingForm = (props) => {
  const { name } = props;

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: ""
  });

  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value
    });
  }

  function handleBookNow() {
    // Logic for opening the form on user click
    setShowForm(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let movieBookingDetail = {
      MovieName: name,
      userDetail
    };

    let sessionStorageMoviesData = sessionStorage.movieBookingDetail;
    console.log("movieBookingDetail:-", movieBookingDetail);
    if (!sessionStorageMoviesData) {
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify([movieBookingDetail])
      );
    } else {
      let parseArray = JSON.parse(sessionStorageMoviesData);
      let newArrayStorage = [...parseArray, movieBookingDetail];
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify(newArrayStorage)
      );
    }
    setUserDetail({
      name: "",
      email: ""
    });
    alert("You Booked your ticket succefully!");
  }

  return (
    <>
      {!showForm ? (
        <Button className="button" onClick={handleBookNow} variant="primary" type="submit">
          Book Now
        </Button>
      ) : (
        <Form className="booking-form" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              defaultValue={name}
              disabled
              type="test"
              placeholder="Movie Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              name="name"
              value={userDetail.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              value={userDetail.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </>
  );
};

export default BookingForm;
