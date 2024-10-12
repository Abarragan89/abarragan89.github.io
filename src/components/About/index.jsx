import './index.css';

function About() {
    return (
        // <section>
        //         <div id='profile-section'>
        //             <p id='about-me-write'>
        //             Hi, I'm Anthony. I'm a self-taught software developer with an academic focus on the MERN stack. I'm proficient in JavaScript and it's many libraries but have also built in Python as well. See my resume for a more detailed breakdown of my skill-set. I enjoy learning new things and am continually growing as a developer. I'm passionate about creating digital applications, working with data structures, and debugging code to develop efficient apps and games that attract many users. Whether it's front-end or back-end, I love the feeling of solving technical problems and running well-built programs. I'm a philosopher at heart and life-long learner. Contact me if you'd like me to help you build something or have any job opportunities!
        //             </p>
        //             <div id='quote'>
        //                 <p>"True Wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us"</p>
        //                 <p>- Socrates</p>
        //             </div>
        //             <img src='images/small/profile-pic.JPG' id='profile-pic' alt='headshot of Anthony Barragan'></img>
        //         </div>
        // </section>

        <section>
            <div id='profile-section'>
                <figure>
                    <img
                        width={150}
                        src='images/small/profile-pic.JPG'
                        id='profile-pic'
                        alt='headshot of Anthony Barragan'
                        data-aos='flip-right'
                        data-aos-offset='200'
                    />
                    <figcaption>
                        <p 
                        id='about-me-write'
                        data-aos='fade-up'
                        data-aos-offset='200'
                        >
                            Hi, my name is Anthony. I'm a full stack developer. I'm also a teacher to a class of 5th graders and a teacher assistant to adults who are interested in learning the MERN stack of web development. I began my developer journey back in 2019 and haven't stopped since. I love problem solving and creating software solutions to help myself and others. I'm a philosopher at heart and a life-long learner. Contact me if you'd like me to help you build something or have any job opportunities!
                        </p>
                    </figcaption>
                </figure>

                <div id='quote'>
                    <p>"True Wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us"</p>
                    <p>- Socrates</p>
                </div>
            </div>
        </section>
    )
}

export default About;