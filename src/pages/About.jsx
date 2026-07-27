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
            <p>I'm Xinyu. I'm currently a lead instructor at iCode Augusta, where I get to teach kids how to make games in Roblox, Unreal Engine, and Minecraft :D. I'm also doing IT backend work to manage the technical infrastructure... but that part's not as fun.</p>
            <p>
              I study CS and Industrial Design at Georgia Tech and in my free time, I love being active outdoors, playing music for my band, and exploring new hobbies. Check my extras page for some of that, I'm more than just my projects :O.
            </p>
            <p>
              I'm passionate about combining technology and creative arts to produce unique products. I love how I can take ideas that come from pure imagination and design and build them into real experiences.
            </p>
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
