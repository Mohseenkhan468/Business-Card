import React from "react";
export default function Main() {
  return (
    <div className="main">
      <div className="detail">
        <div className="intro">
          <h2>Laura Smith</h2>
          <h4>Frontend Developer</h4>
          <p>laurasmith.website</p>
        </div>
        <button><i class="fa-regular fa-envelope"></i>Email</button>
        <button className="linkedIn"><i class="fa-brands fa-linkedin "></i>LinkedIn</button>
        <div className="about">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3>Interest</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}
