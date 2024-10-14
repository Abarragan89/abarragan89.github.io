import Card from '../Card';
import CardImgSection from '../CardImgSection';
import './index.css';

function About() {
    return (
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
                            Hi, my name is Anthony. I'm a full stack developer. I'm also a teacher to a class of 5th graders and a teacher assistant to adults who are interested in learning web development. I began my developer journey back in 2019 and haven't stopped since. I love problem solving and creating software solutions to help myself and others. I'm a philosopher at heart and a life-long learner. Contact me if you'd like me to help you build something or have any job opportunities!
                        </p>
                    </figcaption>
                </figure>

                <section className='about-me-card-section'>
                    <Card title='Education'>
                        <CardImgSection
                            imgSrc='/images/small/EdXlogo.png'
                            title='MERN Stack Certificate'
                        >
                            <ul className='list-in-card'>
                                <li>EdX Bootcamps</li>
                                <li>Certificated</li>
                            </ul>
                        </CardImgSection>
                        <CardImgSection
                            imgSrc='/images/small/LMUlogo.png'
                            title='Master&#39;s in Education'
                        >
                            <ul className='list-in-card'>
                                <li>Loyola Marymount University</li>
                                <li>GPA: 4.0</li>
                            </ul>
                        </CardImgSection>
                        <CardImgSection
                            imgSrc='/images/small/CSUNlogo.png'
                            title='Bachelor&#39;s in Philosophy'
                        >
                            <ul className='list-in-card'>
                                <li>Cal State Northridge</li>
                                <li>GPA: 3.85</li>
                            </ul>
                        </CardImgSection>
                    </Card>
                    <Card title='Work Experience'>
                        <CardImgSection
                            reverse={true}
                            imgSrc='/images/small/EdXlogo.png'
                            title='MERN Stack Teaching Assistant'
                        >
                            <ul className='list-in-card'>
                                <li>Trilogy Education Services</li>
                                <li>Exp. 3 years</li>
                            </ul>
                        </CardImgSection>
                        <CardImgSection
                            reverse={true}
                            imgSrc='/images/small/AOTlogo.png'
                            title='Web Dev Instructor'
                        >
                            <ul className='list-in-card'>
                                <li>America On Tech</li>
                                <li>Exp. 1 year</li>
                            </ul>
                        </CardImgSection>
                        <CardImgSection
                            imgSrc='/images/small/VCAlogo.png'
                            title='General Education Teacher'
                            reverse={true}
                        >
                            <ul className='list-in-card'>
                                <li>Village Charter Academy</li>
                                <li>Exp. 11 years</li>
                            </ul>
                        </CardImgSection>
                    </Card>
                    <Card title='Marquee Apps'>
                        <CardImgSection
                            imgSrc='/images/small/MFMlogo.png'
                            title='Math Fact Missions'
                        >
                            <ul className='list-in-card'>
                                <li>Over 500 users</li>
                                <li>Check it out <a href='https://www.math-fact-missions.com' target='_blank' rel="noopener noreferrer">here</a></li>
                            </ul>
                        </CardImgSection>
                        <CardImgSection
                            reverse={true}
                            imgSrc='/images/small/cannonBallLogo.png'
                            title='Cannon Ball Sea'
                        >
                            <ul className='list-in-card'>
                                <li>Published on App Store</li>
                                <li>Check it out <a href='https://apps.apple.com/us/app/cannon-ball-sea/id6736433554' target='_blank' rel="noopener noreferrer">here</a></li>
                            </ul>
                        </CardImgSection>
                    </Card>
                </section>


                {/* <div id='quote'>
                    <p>"True Wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us"</p>
                    <p>- Socrates</p>
                </div> */}
            </div>
        </section>
    )
}

export default About;