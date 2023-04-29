import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import Modal from '../Modal';

function Project() {
    // Photos are 1000 by 800 PX
    const photoData = [
        {
            name: 'Math Fact Missions',
            photoRoute: 'mathFactMissions',
            description: 'This is a full-stack, subscription-based application for teachers built on the Next.Js framework. Teachers create student accounts and print their logins. Students progress through their missions to demonstrate mastery. There are interactive flashcards to learn, fun review games, and a quiz to unlock new levels. Students earn points and they can buy game upgrades or skins for their avatar. The Avatars are made using Three.js and are displayed in the rankings. Teachers can track and edit student details on their dashboard. New users are given a 5-day free trial, then they can subscribe via Stripe to continue using this service.',
            url: 'https://www.math-fact-missions.com/',
            github: 'https://github.com/Abarragan89/math-missions',
            alt: 'landing page for Math Fact Missions website'
        },
        {
            name: 'Lunaris',
            photoRoute: 'lunaris-large',
            description: 'This is a full-stack expense tracker application designed for mobile devices(PWA). Enter you monthly income to keep track of your monthly budget. Customize your categories, add expenses, enter reoccurring monthly charges, add cash deposits, and we’ll show you your net profit every month. Lunaris saves your history so you’ll be able to see breakdown of previous months and get a snapshot of the entire year. Find treads in your spending habits and limit your spending. This written in Python and uses Flask and SQLAlchemy to access a SQL database.',
            url: 'https://lunaris-finance.herokuapp.com/',
            github: 'https://github.com/Abarragan89/lunar',
            alt: 'landing page for Lunaris Finance'
        },
        {
            name: 'Who Nose That',
            photoRoute: 'who-nose-that-large',
            description: 'Who Nose That is a gameboard generator designed to help teachers create fun games inside the classroom. Teachers can create their own gameboards, edit gameboards, copy premade public gameboards, and generate flashcards based on their gameboards with a a click of a single button. There is a student portal where they can login with their teachers username to view all flashcard sets. There is an exciting bonus round if students get the question correct and a random runner up that can steal the points if the current player gets the question incorrect. This was all designed with student engagement and teacher usability at the forefront. Although geared toward educators anyone can make an account and make their own board. Fun for parties and get-togethers!',
            url: 'https://who-nose-that.com',
            github: 'https://github.com/Abarragan89/trivia_maker',
            alt: 'landing page for Who Nose That website'
        },
        {
            name: 'Draw The Line',
            photoRoute: 'draw-the-line-large',
            description: 'Draw the Line is a social media platform where users can post lengthy articles and users can comment to debate issues. This website has no administrators or monitors. The community of users will monitor itself. If you find something offensive, unconstructive, or just mean, downvote it. Once a comments or posts downvotes make up 60% of its overall likes and dislikes, poof! It’s gone. This is to eliminate the possibility of a noisy few distorting how the majority actually feels on a topic. We give the power back to the people and have faith that the majority will more accurately express a narrative that represents the general public. Draw the Line™ is an experiment in digital democracy. There is a private messaging component that uses Socket.io to instantly display messages to sender and receiver. You can search for friends, make comments, comment on a comment, and edit posts. Comments and subcomments are displayed with the comment with most likes up top. There is a bad word filter installed on the post and comment forms. The application uses nodemailer to send a first time user an email to confirm their account. This app also uses Cloudinary so users can upload a profile picture. This app uses mongoDB as a back-end database.',
            url: 'https://draw-the-line-2.herokuapp.com/ ',
            github: 'https://github.com/Abarragan89/draw-the-line-2',
            alt: 'landing page for Draw the Line website'
        },
        {
            name: 'Dinner and Drinks',
            photoRoute: 'dinner-drinks-large',
            description: 'This is a program that helps you find food and alcohol recipes based on cuisine, dietary restrictions, or liquor available. Just select your craving, dietary lifestyle, and available alcohol, and several recipes will generate using the Spoonacular and Cocktails DB APIs.',
            url: 'https://abarragan89.github.io/dinner-drinks/',
            github: 'https://github.com/Abarragan89/dinner-drinks',
            alt: 'landing page for Dinner and Drinks website'
        },
        // {
        //     name: 'Math Madness',
        //     photoRoute: 'math-madness-large',
        //     description: 'This is a program that tests students multiplication skills. The user has 30 seconds to answer as many questions as they can. The faster they answer, the more points are added to the score. High score is saved so competitors can battle for first place!',
        //     url: 'https://abarragan89.github.io/math_madness/',
        //     github: 'https://github.com/Abarragan89/math_madness',
        //     alt: 'landing page for Math Madness website'
        // },
        {
            name: 'Run Buddy',
            photoRoute: 'run-buddy-large',
            description: 'This a mock landing page for a fictional company called \'Run Buddy\'. This site is fully responsive and uses pure HTML and CSS.',
            url: 'https://abarragan89.github.io/run-buddy/',
            github: 'https://github.com/Abarragan89/run-buddy',
            alt: 'landing page for Run Buddy website'
        },
        {
            name: 'Weather Watcher',
            photoRoute: 'weather-watcher-large',
            description: 'This a program that gets data from Open Weather API and displays weather info for that city. It will display the current weather information was well as a five day forecast. It will save your recent searches in local storage.',
            url: 'https://abarragan89.github.io/weather-watcher/',
            github: 'https://github.com/Abarragan89/weather-watcher',
            alt: 'landing page for Weather Watcher website'
        },
        {
            name: 'Work Scheduler',
            photoRoute: 'work-scheduler-large',
            description: 'This is a program that uses the current time to track tasks. The task bars are colored coded depending on whether they are in the past, present, or future. Task can be saved by clicking on the save button.',
            url: 'https://abarragan89.github.io/daily-work-scheduler/',
            github: 'https://github.com/Abarragan89/daily-work-scheduler',
            alt: 'landing page for Work Day Scheduler website'
        },
        {
            name: 'Treasure Map',
            photoRoute: 'treasure-map-large',
            description: 'This is a game where you have to click on a page and find the buried treasure. Use the \'hot\' and \'cold\' clues to help you!',
            url: 'https://abarragan89.github.io/treasure-map/',
            github: 'https://github.com/Abarragan89/treasure-map',
            alt: 'landing page for Treasure Map Game website'

        },
        // {
        //     name: 'Snake Game',
        //     photoRoute: 'snake-game-large',
        //     description: 'This is a replica of the classic \'snake game\'. The basic logic for this project came from \'JavaScript For Kids\' by Nick Morgan and was my introduction into Javascript',
        //     url: 'https://abarragan89.github.io/snake-game/',
        //     github: 'https://github.com/Abarragan89/snake-game',
        //     alt: 'landing page for Snake Game website'

        // }
    ];
    // initiate on scroll package
    useEffect(() => {
        Aos.init({});
    });
    // refresh on scroll package to ensure attributes are added after they have been loaded
    useLayoutEffect(() => {
        setTimeout(() => Aos.refresh(), 250)
    })
    const [isModal, setIsModal] = useState(false)
    const [currentProject, setCurrentProject] = useState('')

    function toggleModal(project) {
        window.scrollTo(0,0)
        setCurrentProject(project)
        setIsModal(!isModal)
    }

    function closeModal() {
        setIsModal(!isModal);
    }
    return (
        <section className='project-display section'>
            {isModal && <Modal project={currentProject} onClose={closeModal} />}
            {photoData.map((project, i) => {
                {/* Every other project will be given different on scroll events */}
                if( i === 0) {
                    return(<figure
                    data-aos='slide-up'
                    data-aos-duration='250'
                    className='gallery-cards card-right' id='marquee-project' key={i}>
                    <img src={require(`../../assets/large/${project.photoRoute}.png`)} alt={project.alt} onClick={() => toggleModal(project)} />
                </figure>)
                }else if (i % 2 === 0) {
                    return(<figure
                    data-aos='slide-left'
                    data-aos-duration='250'
                    className='gallery-cards card-right' key={i}>
                    <img src={require(`../../assets/large/${project.photoRoute}.png`)} alt={project.alt} onClick={() => toggleModal(project)} />
                </figure>)
                }else {
                    return(<figure
                    data-aos='slide-right'
                    data-aos-duration='250'
                    className='gallery-cards card-left' key={i}>
                    <img src={require(`../../assets/large/${project.photoRoute}.png`)} alt={project.alt} onClick={() => toggleModal(project)} />
                </figure>)
                }
                } 
            )}
        </section>
    )
}
export default Project;