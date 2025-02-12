import React from "react";
import image from "../mypic.jpg";
function About() {
  return (
    <div
      className="container d-flex"
      style={{
        marginTop: "150px",
        marginBottom: '100px',
      }}
    >
      <div
        className="about-text"
        style={{
          display: 'flex',
          alignItems: 'center'
        
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: '20px 70px'
          }}
        >
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: "center"
            }}
          >
            <p>
            <h1>
              Hello I'm <strong>Rohit Pal</strong>, a Software Developer
            </h1>
              Welcome to my corner of the web! My name is Rohit Pal, and I'm a
              passionate web developer dedicated to crafting exceptional digital
              experiences. 
            </p>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={image}
              alt="mypic"
              style={{
                width: "400px",
                height: "400px",
                border: "2px solid gray",
                borderRadius: "50%",
                margin: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
