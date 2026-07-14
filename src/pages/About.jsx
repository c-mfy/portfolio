import SocialLinks from "../components/SocialLinks.jsx";
import "./About.css";

export default function About() {
  return (
    <section className="page about">
      <div className="about-grid">
        {/* LEFT: photo. Drop a file in /public/images and update the src. */}
        <div className="about-photo">
          {/* Replace the placeholder below with:
              <img src="/images/me.jpg" alt="YOUR NAME" /> */}
          <div className="about-photo-placeholder">
            <img src="/images/aboutmephoto.jpg" alt="About Me Photo" />
          </div>
        </div>

        {/* RIGHT: bio */}
        <div className="about-bio">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Xinyu</h1>
          <p className="about-role">
            cs + industrial design · georgia tech
          </p>

          <div className="about-text">
            <p>I'm currently a lead instructor at iCode Augusta, where I am doing IT backend work to support the business model.</p>
            <p>
              I have a lot of different interests!
            </p>
          </div>

          <div className="about-socials">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
