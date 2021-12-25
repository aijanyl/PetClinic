import React from "react";
import cont from "../../videos/cont.mp4";

const ContactUs = () => {
  return (
    <div
      className="Contact"
      style={{ display: "flex", backgroundColor: "#e2eafa" }}
    >
      <>
        <div
          className="container"
          style={{ display: "flex", marginTop: "90px" }}
        >
          <video
            className="video"
            width="600px"
            height="400px"
            autoPlay
            loop
            muted
          >
            <source src={cont} type="video/mp4" />
          </video>
          <p style={{ marginLeft: "20px" }}>
            <h2
              className="our2"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Contact Us
            </h2>
            Veterinarian and dog smiling How to Reach Us Corporate Address VCA
            Inc. 12401 West Olympic Blvd. Los Angeles, CA 90064 Tel:
            1-310-571-6500 Fax: 1-310-571-6700 Toll Free: 1-800-VCA-PETS For all
            questions regarding veterinary medical services or your pet's
            health: Please contact your local VCA Animal Hospital. To help find
            the nearest VCA Animal Hospital to you, please call 1-800-VCA-PETS
            or use our hospital locator. For all questions regarding VCA
            CareClub plans, please contact 1-800-743-8838. If you are a member
            of the media, please contact [email protected].
          </p>
        </div>

        <div></div>
      </>
    </div>
  );
};

export default ContactUs;
