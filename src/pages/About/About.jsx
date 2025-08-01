import React from 'react';


function About() {
    return (
        <>
            <div className="about-body">
                <div className="about-image">
                    <img src="./images/aboutbackground2.jpg" alt="" className="about-image" />

                </div>

                <div className="about-text">
                    <h1>About me</h1>
                    <p>Results-driven Frontend Developer with expertise in UI/UX
                        design, creating responsive and user-friendly web interfaces.
                        Proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind, and
                        React. Skilled in transforming design concepts into interactive,
                        high-performance experiences. Passionate about building
                        seamless digital solutions that enhance user engagement.
                    </p>
                </div>
            </div>

<section className="about-skill-section">
    <h1>Skills</h1>
            <div className="about-skills">
                <img src="./images/html.png" alt="" className="src" />
                <img src="./images/css.png" alt="" className="src" />
                <img src="./images/js.png" alt="" className="src" />
                <img src="./images/react.png" alt="" className="src" />
                <img src="./images/tailwind.png" alt="" className="src" />
                <img src="./images/bootstrap.png" alt="" className="src" />
            </div>
            </section>

        </>
    )
}
export default About;