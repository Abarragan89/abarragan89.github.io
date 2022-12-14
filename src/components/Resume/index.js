import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import sounds
import useSound from 'use-sound';
import click from '../../assets/sounds/click.wav';

// import Link
import { Link } from 'react-router-dom';

function Resume() {
    useEffect(() => {
        Aos.init({});
    });
    const [clickSound] = useSound(click, { volume: '.5' });

    return (
        <div className='section'>
            <h3 className='section-heading'>Resume</h3>
            <p className='heading-bar'></p>
            <div id='resume-section'>
                {/* Personal Information Heading */}
                <Link to='/resume-pdf' className='modal-links print-resume-btn' onClick={() => clickSound()}>Print-Friendly Resume</Link>
                <div id='resume-personal-info'>
                    <h4>Anthony Barragan</h4>
                    <p>Simi Valley, California</p>
                </div>
                {/* Summary Heading */}
                <div id='resume-summary'
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay="50">
                    <h4 className='resume-heading'>Summary</h4>
                    <p className='resume-text'>Full-stack web developer with an academic focus on the MERN stack. Quick to adapt to new programming languages in order to work with data structures and build efficient applications. Innovative problem-solver with ability to self-manage during independent projects. Currently working as an elementary school teacher with a Master's in Education and Administrative Credential. Enthusiastic about creating and maintaining responsive web applications that have a positive effect in the world. Continuously expanding developer toolset and now seeking a role as a software engineer. </p>
                </div>
                <p className='heading-bar'></p>

                {/* Technical Skills */}
                <div id='resume-skills'
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay="50">
                    <h4 className='resume-heading'>Technical Skills</h4>
                    <h5 className='resume-subtitle'>Languages</h5>
                    <p className='resume-text'> JavaScript | React.Js | Node.Js | Express.Js | MongoDB | Mongoose | HTML5 | CSS3 | Handlebars.js | MySQL | NoSQL | GraphQL | </p>
                    <h5 className='resume-subtitle'>Applications/Paradigms</h5>
                    <p className='resume-text'>MVC paradigm | RESTful APIs | PWAs | Object-oriented programming | Git/GitHub | Procreate</p>
                </div>
                <p className='heading-bar'></p>

                {/* Projects */}
                <div id="projects"
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay="50">
                    <h4 className='resume-heading'>Projects</h4>
                    <h5 className='resume-subtitle'>Math Fact Missions</h5>
                    <p>This is a full-stack application where users can test their math fact knowledge. This is geared toward a classroom environment but is great for anyone trying to improve their mental math skills. User can enter a name and choose their missions. They can battle where they race to answer as many questions as they can to unlock the next level, or they can train and play a game to improve their fluency. Game data is saved locally using IndexedDB. Game data is also saved on MongoDB using Mongoose so players can see how they rank against others in different games. Players can also add friends to make custom scoreboards. </p>
                    <p>I developed this app to replace the paper-based, two-minute drill teachers give to student to demonstrate mastery of math facts. With this app, students can progress at their own pace and makes rote memorization fun! Saves on paper and students can compete with one another.</p>
                    <p>Languages: Next.js | TypeScript | MongoDB | Mongoose | Node.Js | Express.Js | IndexedDB | HTML Canvas | SASS</p>

                    <div data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-delay="50">
                        <h5 className='resume-subtitle'>Who Nose That</h5>
                        <p>This is a full-stack game generator geared to helping teachers in the classroom. Users can make an account and create gameboards by adding their questions and answers. Gameboards are Jeopardy-like and promote group/pair work in the classroom. Teachers also have the option of making a gameboard a 'study-set'. This turns the questions and answers into flashcards that students can access through the student portal by inputting their teacher\'s username. Here, they can play another flashcard game to study before the classroom game. Teachers can also makes their gameboards public, copy public games to their library, and edit games.</p>
                        <p>I developed this app to help teachers make review games fun and easy to create. I like to add a little bit of chance to educational games so the it's not the same students winning, so I added the bonus round.</p>
                        <p>Languages: React.js | JavaScript | GraphQL | MongoDB | Mongoose | Node.Js | Express.Js | HTML Canvas | JWT</p>
                    </div>

                    <div data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-delay="50">
                        <h5 className='resume-subtitle'>Draw The Line</h5>
                        <p>Draw the Line is a social media platform where users can post ideas, can comment, and comment on a comment to debate issues. This website has no administrators or monitors. The community of users will monitor itself. If you find something offensive, unconstructive, or just mean, downvote it. Once a comment’s or post’s downvotes make up 60% of its overall likes and dislikes, poof! It’s gone. There is also a direct messaging component that uses Socket.io to render messages immediately to sender.</p>
                        <p>I developed this app in the midst of Elon Musk buying Twitter. So much debate over who should be able to censor led me to create a social media platform where the users decide what should be censored. A truly democratic approach to social media.</p>
                        <p>Languages: React.js | JavaScript | GraphQL | MongoDB | Mongoose | Node.Js | Express.Js | Socket.io | JWT</p>
                    </div>

                    <div data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-delay="50">
                        <h5 className='resume-subtitle'>Expense Tracker</h5>
                        <p>This is a full-stack expense tracker. Enter your monthly income to keep track of your monthly usage. Add category tags and then add expenses to those tags. Your data will be displayed using Charts.js. Every Month, your expense resets and expenses marked as 'monthly' are automatically deducted.</p>
                        <p>I developed the backend logic to connect user input to server-side database, deduct monthly expense, display categories on charts, automate monthly deductions for expenses tagged as monthly. Created database structures and connected Charts.Js to display user input</p>
                        <p>Languages: JavaScript | MongoDB | Mongoose | Node.Js | Express.Js | Charts.js | Handlebars.Js | CSS</p>
                    </div>

                </div>
                <p className='heading-bar'></p>

                {/* Experience */}
                <div
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay="50">
                    <h4 className='resume-heading'>Experience</h4>

                    <div className='job-listing'>
                        <div className='flex-container'>
                            <div>
                                <p>Instructional Teaching Assistant</p>
                                <p>2U Trilogoy Education</p>
                            </div>
                            <div>
                                <p>2022 - Present</p>
                                <p>Remote</p>
                            </div>
                        </div>
                        <p>I teach students the skills necessary to become a full-stack web developer. We focus on the MERN stack. We also cover HTML, CSS, MySQL and NoSQL databases, Algorithms, MVC, GitHub/Git, testing with Jest, ORMs, Object-Oriented Programming, Functional Programming, and CSS frameworks such as Bootstrap. I work with students in a one-on-one or small group setting. </p>
                        <p className='key-accomplishments'>Key Role</p>
                        <ul>
                            <li>Coordinate with instructor to plan lessons and facilitate online classes</li>
                            <li>Support students via Slack to help with coding bugs and issues</li>
                            <li>Work with students during office hours to provide guidance when completing assignments and projects</li>
                        </ul>
                    </div>

                    <div className='job-listing'>
                        <div className='flex-container'>
                            <div>
                                <p>General Education Teacher</p>
                                <p>Village Charter Academy</p>
                            </div>
                            <div>
                                <p>2018 - Present</p>
                                <p>Canoga Park, CA</p>
                            </div>
                        </div>
                        <p>Plan, develop, and implement instructional lessons to adhere to the 5th grade State curriculum. Create differentiated lesson plans that make learning objectives accessible to a diverse group of students. Continually analyze assessment to inform instruction. Collaborate with the Special Education department to develop and implement Individualized Education Plans. </p>
                        <p className='key-accomplishments'>Key Accomplishments</p>
                        <ul>
                            <li>Help develop a plan to transition the school to Distance Learning during COVID</li>
                            <li>Created Google accounts for all students and aided in the distribution of devices</li>
                            <li>Adapted to Distance Learning by incorporating new technologies to distribute and teach curriculum</li>
                        </ul>
                    </div>


                    <div className='job-listing'
                        data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-delay="50">
                        <div className='flex-container'>
                            <div>
                                <p>General Education Teacher</p>
                                <p>St. Ferdinand School</p>
                            </div>
                            <div>
                                <p>2015 - 2018</p>
                                <p>San Fernando, CA</p>
                            </div>
                        </div>
                        <p>Implement successful classroom management practices that promote an effective learning environment. Collaborate with parents, teachers, and administrators to best meet the needs of students. Contribute meaningful ideas during professional development meetings to improve the overall direction and impact of school wide policies. </p>
                        <p className='key-accomplishments'>Key Accomplishments</p>
                        <ul>
                            <li>Coordinator for after-school Lego-Robotics programs</li>
                            <li>Lead/coordinate school-wide Spelling-Bee</li>
                            <li>Serve as a mentor to new teachers</li>
                        </ul>
                    </div>


                    <div className='job-listing'
                        data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-delay="50">
                        <div className='flex-container'>
                            <div>
                                <p>General Education Teacher</p>
                                <p>St. John Baptist De La Salle</p>
                            </div>
                            <div>
                                <p>2013 - 2015</p>
                                <p>Granada Hills, CA</p>
                            </div>
                        </div>
                        <p>Classroom teacher for 3rd and 5th grade. Create a positive and safe learning environment for students. Collaborate with parents, administrators, and other teachers to develop effective lesson plans. Create homogenous and heterogenous groups to administer intervention instructional activities based on learning needs</p>
                        <p className='key-accomplishments'>Key Accomplishments</p>
                        <ul>
                            <li>Develop customized lesson plans for daily instruction</li>
                            <li>Incorporate technology, such as Prezi, to deliver and assess student learning. </li>
                            <li>Successfully coordinate Christmas, Easter, and other classroom performances and events. </li>
                        </ul>
                    </div>
                </div>
                <p className='heading-bar'></p>

                {/* Education */}
                <div data-aos='fade-up'
                    data-aos-duration='2000'

                    data-aos-delay="50"
                    id='education'>
                    <h4 className='resume-heading'>Education</h4>
                    <div className='flex-container'>
                        <div>
                            <p>UCLA Extension Full-Stack Bootcamp - Mern Stack Certificate</p>
                            <p>Lanham, Maryland</p>
                            <p>Certificate</p>
                        </div>
                        <p>2022</p>
                    </div>
                    <div className='flex-container'>
                        <div>
                            <p>National University - Administrative Credential</p>
                            <p>San Diego, California</p>
                            <p>GPA: 3.81</p>
                        </div>
                        <p>2019</p>
                    </div>
                    <div className='flex-container'>
                        <div>
                            <p>Loyola Marymount University - Master's in Education</p>
                            <p>Los Angeles, California</p>
                            <p>GPA: 4.0</p>
                        </div>
                        <p>2015</p>
                    </div>
                    <div className='flex-container'>
                        <div>
                            <p>Cal State Northridge - Bachelor's in Philosophy</p>
                            <p>Northridge, California</p>
                            <p>GPA: 3.85</p>
                        </div>
                        <p>2012</p>
                    </div>
                    <div className='flex-container'>
                        <div>
                            <p>Los Angeles Pierce College - Associate's in Liberal Studies</p>
                            <p>Woodland Hills, California</p>
                            <p>GPA: 3.78</p>
                        </div>
                        <p>2010</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;