import React from "react";
import Navbar from "./Navbar";
import './component.css'
function About() {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <section>
          <h2 style={{ color: "#f57542" }}>About</h2>
          <p>Welcome to our Memes Generator project. This project allows you to create and customize hilarious memes with ease. Express your creativity and share the laughter with your friends!</p>
          <p>Key Features:</p>
          <ul>
            <li>Create memes using popular templates or upload your own images.</li>
            <li>Customize text, font, size, and color to add captions to your memes.</li>
            <li>Explore a vast collection of funny stickers and emojis to enhance your memes.</li>
            <li>Save your memes and share them directly on social media platforms.</li>
            <li>Discover trending memes created by the community and upvote your favorites.</li>
          </ul>
          <p>Whether you want to brighten up your day or make others laugh, our Memes Generator is here to help you create unforgettable meme moments. Start creating and spreading the humor today!</p>
        </section>
      </div>

    </>
  )
}
export default About;