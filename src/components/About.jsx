import React from "react";

function About({ image, about }) {
  return (
    <p>
      <aside>
        <img src={image} alt="blog logo" />
      </aside>
      {about}
    </p>
  );
}

export default About;
