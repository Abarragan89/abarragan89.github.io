import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Resume() {

    useEffect(() => {
        Aos.init({});
    });
    return (
        <>
        <h3 className='section-heading'>Resume</h3>
        <p className='heading-bar'></p>
        <div id='resume-section'>
        {/* Personal Information Heading */}
        <a href='https://docs.google.com/document/d/1sxY1p5RfaSvXo2zPWb_KqfOKj2wp_P9YYg_EE7oBrDE/edit?usp=sharing' target='_blank' className='modal-links print-resume-btn'>Print-Friendly Resume</a>
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
                <p className='resume-text'>Full-Stack software developer with an academic focus on the MERN stack. Adaptable to new programming languages in order to work with data structures and build efficient applications. Elementary school teacher with a Master's in Education and Administrative Credential. Proficient in developing differentiated lesson plans that adhere to different learning styles and maintain student engagement. Seeking a role as a software engineer.</p>
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
                <h5 className='resume-subtitle'>Expense Tracker</h5>
                <p>This is a full-stack expense tracker. Enter your monthly income to keep track of your monthly usage. Add category tags and then add expenses to those tags. Your data will be displayed using Charts.js. Every Month, your expense resets and expenses marked as 'monthly' are automatically deducted.</p>
                <p>I developed the backend logic to connect user input to server-side database, deduct monthly expense, display categories on charts, automate monthly deductions for expenses tagged as monthly. Created database structures and connected Charts.Js to display user input.</p>
                <p>Languages: JavaScript | MongoDB | Mongoose | Node.Js | Express.Js | Charts.js | Handlebars.Js | CSS</p>

                <div data-aos='fade-up'
                    data-aos-duration='2000' 
                    data-aos-delay="50">
                <h5 className='resume-subtitle'>Dinner and Drinks</h5>
                <p>This is a program that helps you find food and alcohol recipes based on cuisine, dietary restrictions, and/or liquor available. Just select your craving, dietary lifestyle, and available alcohol, and several recipes will generate using the Spoonacular and Cocktails DB APIs.</p>
                <p>I developed the backend logic to connect user input to Spoonacular and Cocktails DB searches. Created the code to generate cards and used Bulma to optimize styles and make the application responsive. </p>
                <p>JavaScript | Bulma | HTML | CSS | Spoonacular API | Cocktails DB API</p>
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
            <div    data-aos='fade-up'
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
        </>
    )
}

export default Resume;