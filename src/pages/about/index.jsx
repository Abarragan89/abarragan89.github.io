import './index.css';

function About () {
    return (   
        <section>
            <div className='section'>
                <h3 className='section-heading'>About  Me</h3>
                <p className='heading-bar'></p>
                <div id='profile-section'>
                    <p id='about-me-write'>
                    Hi, I'm Anthony. I'm a self-taught software developer with an academic focus on the MERN stack. I'm proficient in JavaScript and it's many libraries but have also built in Python as well. See my resume for a more detailed breakdown of my skill-set. I enjoy learning new things and am continually growing as a developer. I'm passionate about creating digital applications, working with data structures, and debugging code to develop efficient apps and games that attract many users. Whether it's front-end or back-end, I love the feeling of solving technical problems and running well-built programs. I'm a philosopher at heart and life-long learner. Contact me if you'd like me to help you build something or have any job opportunities!
                    </p>
                    <div id='quote'>
                        <p>"True Wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us"</p>
                        <p>- Socrates</p>
                    </div>
                    <img src='images/small/profile-pic.JPG' id='profile-pic' alt='headshot of Anthony Barragan'></img>
                </div>
            </div>
        </section>
    )
}

export default About;