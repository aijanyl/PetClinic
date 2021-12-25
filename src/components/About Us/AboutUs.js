import React from "react";
import about from "../../videos/about.mp4";
import about2 from "../../videos/about2.mp4";

const AboutUs = () => {
  return (
    <div>
      <>
        <div className="container24" style={{ marginTop: "90px" }}>
          <h2
            className="our23"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#4062c8",
              marginBottom: "50px",
              marginLeft: "20px",
            }}
          >
            About Us
          </h2>
        </div>
        <div className="container-e">
          <video
            className="video"
            width="50%"
            height="400px"
            autoPlay
            loop
            muted
          >
            <source src={about} type="video/mp4" />
          </video>
          <video
            className="video"
            width="50%"
            height="400px"
            autoPlay
            loop
            muted
          >
            <source src={about2} type="video/mp4" />
          </video>
        </div>

        <p style={{ marginTop: "50px", marginBottom: "50px" }}>
          The typical veterinary practice today is antiquated. One of our
          founders learned this first hand after his boxer, Morris, came down
          with a mystery stomach ailment. He visited eight vet clinics in search
          of a diagnosis, racking up thousands of dollars in bills as Morris
          withstood one test — and cheerless waiting room — after another.
          Same-day appointments were rarely available and medical records were
          closely guarded. What’s more, he could never communicate directly with
          a doctor, by phone or otherwise. We’re changing all of that. Our
          founders envisioned a different sort of veterinary experience that
          combines modern technology with warm hospitality and a commitment to
          transparency. And, most importantly, integrative and reliable care for
          pets like Morris, who, after finally receiving a diagnosis and
          treatment, returned to his happy life playing tug-of-war and
          bodysurfing ocean waves. Our goal is to provide veterinarians with the
          support and resources they need to be their best. In fact, their well
          being is incorporated into our founding charter. With every decision
          we make, we take their well-being and success into account. Small Door
          is a Certified B Corporation, held to a rigorous standard of social
          and environmental performance, public transparency, and
          accountability. We are also a Public Benefit Corporation, which means
          we operate not only to maximize profits but to make the world a better
          place in concrete, measurable ways.
        </p>

        <div></div>
      </>
    </div>
  );
};

export default AboutUs;
