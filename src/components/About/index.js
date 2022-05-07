// import photo from '../../assets/small/profile-pic.JPG'
function About () {
    return (   
        <section>
            <div>
                <h3 className='section-heading'>About  Me</h3>
                <p className='heading-bar'></p>
                <div id='profile-section'>
                    <p id='about-me-write'>
                    Hello, my name is Anthony. I've been teaching in elementary schools for 9 years. I'm a self-taught software developer with an academic focus on the MERN stack. I enjoy learning new things and I continue to grow my skill-set as a coder. I'm passionate about creating digital applications, working with data structures, debugging code, and developing interactive apps and games. Whether it's front-end or back-end, I love the feeling of solving technical problems and running well-built programs. Philosopher at heart and life-long learner.
                    </p>
                    <div id='quote'>
                        <p>"True Wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us"</p>
                        <p>- Socrates</p>
                    </div>
                    <img src={require('../../assets/small/profile-pic.JPG')} id='profile-pic'></img>
                </div>
            </div>
        </section>
    )
}

export default About;