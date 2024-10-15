import { useState } from 'react';
import Modal from '../Modal';
import './index.css';

function Project() {
    // Photos are 1000 by 800 PX
    const photoData = [
        {
            name: 'Math Fact Missions',
            photoRoute: 'mathFactMissions',
            description: 'This is a full-stack, subscription-based application for teachers built on the Next.Js framework. Teachers create student accounts and print their logins. Students progress through their missions to demonstrate mastery. There are interactive flashcards to learn, fun review games, and a quiz to unlock new levels. Students earn points and they can buy game upgrades or skins for their avatar. The Avatars are made using Three.js and are displayed in the rankings. Teachers can track and edit student details on their dashboard. New users are given a 14-day free trial, then they can subscribe via Stripe to continue using this service.',
            url: 'https://www.math-fact-missions.com/',
            github: 'https://github.com/Abarragan89/math-missions',
            alt: 'landing page for Math Fact Missions website',
            technologies: 'Next.Js | TypeScript | MongoDB | Three.Js | Canvas API | Stripe API'
        },
        {
            name: 'Cannon Ball Sea',
            photoRoute: 'cannon-ball',
            description: 'My first published game on the App Store. 45 levels of fun! Try to hit the TNT handle and watch it explode. Obstacles stand in your way and things do get challenging. Use points earned to level up you cannon and cannon balls to complete all 45 levels and collect all stars! Created using React Native.',
            url: 'https://apps.apple.com/us/app/cannon-ball-sea/id6736433554',
            github: 'https://github.com/Abarragan89/cannon-ball',
            alt: 'link for cannon ball in app store',
            technologies: 'React Native | Expo | React Native Game Engine | SQLite'

        },
        {
            name: 'Lunaris Finance',
            photoRoute: 'lunaris-large',
            description: 'This is a full-stack expense tracker application designed for mobile devices(PWA). Enter you monthly income to keep track of your budget. Customize your categories, add expenses, enter reoccurring monthly charges, add cash deposits, and we’ll show you your net profit every month. Lunaris saves your history so you’ll be able to see breakdown of previous months and get a snapshot of the entire year. Find trends in your spending habits and limit your spending. This is written in Python and uses Flask and SQLAlchemy to access a SQL database.',
            url: 'https://lunaris-finance.herokuapp.com/',
            github: 'https://github.com/Abarragan89/lunar',
            alt: 'landing page for Lunaris Finance',
            technologies: 'Python | Flask | SQLAlchemy | Charts.py'

        },
        {
            name: 'Who Nose That?!',
            photoRoute: 'who-nose-that-large',
            description: 'Create your won Jeopardy-style game boards with Who Nose That! Edit gameboards, use public gameboards, and generate flashcards based on their questions with a a click of a single button. Student can study these flashcards through student login. There is an exciting bonus round during gameplay if students get the question correct. This was all designed with student engagement and teacher usability at the forefront. Although geared toward educators anyone can make an account and make their own board. Fun for parties and get-togethers!',
            url: 'https://who-nose-that.com',
            github: 'https://github.com/Abarragan89/trivia_maker',
            alt: 'landing page for Who Nose That website',
            technologies: 'React.Js | MongoDB | Express.Js | GraphQL'

        },
        {
            name: 'The Sunday Social',
            photoRoute: 'the-sunday-social',
            description: 'This is a social media app I created for people who don\'t use social media. The Sunday Social is for those who want to be on social media one day out of the week... Sunday. It\'s a layback-beach vibe place where you can make a profile, find friends through searchable traits (i.e. relationship status, username, hobbies, school, work, etc.), make posts, comment on posts, like posts, and message friends. The messaging component utilizes Socket.io to create a real time messaging experience, no refresh or reload needed. Make an account and join the wave today!',
            url: 'https://the-sunday-social-b780c9b989cc.herokuapp.com/',
            github: 'https://github.com/Abarragan89/the-sunday-social',
            alt: 'landing page for The Sunday Social website',
            technologies: 'React.Js | MySQL | Socket.io | GraphQL | Nodemailer'

        },
        {
            name: 'Dinner and Drinks',
            photoRoute: 'dinner-drinks-large',
            description: 'This is a program that helps you find food and alcohol recipes based on cuisine, dietary restrictions, or liquor available. Just select your craving, dietary lifestyle, and available alcohol, and several recipes will generate using the Spoonacular and Cocktails DB APIs.',
            url: 'https://abarragan89.github.io/dinner-drinks/',
            github: 'https://github.com/Abarragan89/dinner-drinks',
            alt: 'landing page for Dinner and Drinks website',
            technologies: 'JavaScript| SpoonacularAPI | CocktailDB | Storage API '

        },
        // {
        //     name: 'Math Madness',
        //     photoRoute: 'math-madness-large',
        //     description: 'This is a program that tests students multiplication skills. The user has 30 seconds to answer as many questions as they can. The faster they answer, the more points are added to the score. High score is saved so competitors can battle for first place!',
        //     url: 'https://abarragan89.github.io/math_madness/',
        //     github: 'https://github.com/Abarragan89/math_madness',
        //     alt: 'landing page for Math Madness website'
        // },
        // {
        //     name: 'Run Buddy',
        //     photoRoute: 'run-buddy-large',
        //     description: 'This a mock landing page for a fictional company called \'Run Buddy\'. This site is fully responsive and uses pure HTML and CSS.',
        //     url: 'https://abarragan89.github.io/run-buddy/',
        //     github: 'https://github.com/Abarragan89/run-buddy',
        //     alt: 'landing page for Run Buddy website',
        //     technologies: 'HTML5 | CSS3'

        // },
        // {
        //     name: 'Weather Watcher',
        //     photoRoute: 'weather-watcher-large',
        //     description: 'This a program that gets data from Open Weather API and displays weather info for that city. It will display the current weather information was well as a five day forecast. It will save your recent searches in local storage.',
        //     url: 'https://abarragan89.github.io/weather-watcher/',
        //     github: 'https://github.com/Abarragan89/weather-watcher',
        //     alt: 'landing page for Weather Watcher website',
        //     technologies: 'JavaScript | OpenWeatherAPI | HTML5 | CSS3'

        // },
        // {
        //     name: 'Work Scheduler',
        //     photoRoute: 'work-scheduler-large',
        //     description: 'This is a program that uses the current time to track tasks. The task bars are colored coded depending on whether they are in the past, present, or future. Task can be saved by clicking on the save button.',
        //     url: 'https://abarragan89.github.io/daily-work-scheduler/',
        //     github: 'https://github.com/Abarragan89/daily-work-scheduler',
        //     alt: 'landing page for Work Day Scheduler website',
        //     technologies: 'JavaScript | Storage API | HTML5 | CSS3'
        // },
        // {
        //     name: 'Treasure Map',
        //     photoRoute: 'treasure-map-large',
        //     description: 'This is a game where you have to click on a page and find the buried treasure. Use the \'hot\' and \'cold\' clues to help you!',
        //     url: 'https://abarragan89.github.io/treasure-map/',
        //     github: 'https://github.com/Abarragan89/treasure-map',
        //     alt: 'landing page for Treasure Map Game website',
        //     technologies: 'JavaScript | HTML Canvas API | CSS3'

        // },
        // {
        //     name: 'Snake Game',
        //     photoRoute: 'snake-game-large',
        //     description: 'This is a replica of the classic \'snake game\'. The basic logic for this project came from \'JavaScript For Kids\' by Nick Morgan and was my introduction into Javascript',
        //     url: 'https://abarragan89.github.io/snake-game/',
        //     github: 'https://github.com/Abarragan89/snake-game',
        //     alt: 'landing page for Snake Game website'

        // }
    ];

    const [isModal, setIsModal] = useState(false)
    const [currentProject, setCurrentProject] = useState('')

    function toggleModal(project) {

        setCurrentProject(project)
        setIsModal(!isModal)
        // disable scrolling
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

    }

    function closeModal() {
        setIsModal(!isModal);
        // disable scrolling
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }

    return (
            <section className='project-display section'>
                {isModal && <Modal project={currentProject} onClose={closeModal} />}
                {photoData.map((project, i) =>
                    <figure
                        data-aos={i % 2 === 0 ? 'flip-right' : 'flip-left'}
                        data-aos-duration='1500'
                        className='gallery-cards card-right'
                        key={i}
                        id={i === 1 ? 'marquee-project' : ''}
                    >
                        <h4 className='project-name'>{project.name}</h4>
                        <div className="overlay">
                            <p>{project.name}</p>
                            <p>{project.technologies}</p>
                            <p>(click for details)</p>
                        </div>
                        <img src={`images/large/${project.photoRoute}.png`} alt={project.alt} onClick={() => toggleModal(project)} />
                    </figure>
                )}
            </section>
    )
}
export default Project;