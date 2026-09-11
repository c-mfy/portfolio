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
          <img src="/images/aboutmephoto.webp" alt="About Me Photo" />
        </div>

        {/* RIGHT: bio */}
        <div className="about-bio">
          <p className="eyebrow">Nice to meet you!</p>
          {/*<h1>Xinyu</h1>
          <p className="about-role">
            cs + industrial design · georgia tech
          </p>*/}

          <div className="about-text">
            <p>I'm currently a full-time student at the Georgia Institute of Technology. This past summer, I was a lead instructor at iCode Augusta, where I got to teach kids how to make games in Roblox, Unreal Engine, and Minecraft :D. I'm also did IT backend work to manage the technical infrastructure… but that part's not as fun. I'm also working on getting my AWS Cloud Practitioner certification.</p>
            <p>
              I'm pursuing a B.S. in CS and a minor in Industrial Design. Outside of school, I love being active outdoors, playing music for my band, and exploring new hobbies.

              I'm passionate about combining technology and creative arts to produce unique products. I love how I can take ideas that come from pure imagination and design and build them into real experiences.
            </p>

            {/* <ul className="about-text"> What I'm up to recently:
              <li>Picking up soccer again after 10 years!</li>
            </ul> */}
            <p>
              Connect with me, I'd love to chat about anything, it doesn't have to be tech related!
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
