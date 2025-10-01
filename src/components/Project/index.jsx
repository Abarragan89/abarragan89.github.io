import { useState } from 'react';
import Modal from '../Modal';
import './index.css';

function Project() {
    // Photos are 1000 by 800 PX
    const photoData = [
        {
            name: 'JotterBlog',
            photoRoute: 'jotterblog',
            description: 'Complete classroom blogging platform built on the Next.js framework utilizing Prisma ORM, S3 for image storage, NextAuth authentication, and full integration with Google Classroom. Essays are autograded with teacher supplied rubrics using OpenAI\'s GPT-5 API, with feedback provided to students. Assessments with short answer questions can also be created and autograded with AI to get instant feedback on class performance.',
            url: 'https://jotterblog.com/',
            github: 'https://github.com/Abarragan89/classroom-journals',
            alt: 'landing page for JotterBlog website',
            technologies: 'Next.Js | TypeScript | Postgres | Prisma | Google API | Stripe API | OpenAI API'
        },
        {
            name: 'TacBlok',
            photoRoute: 'tacblok',
            description: 'Real time gameplay with friends using Socket.io. Make a lobby and send the link to a friend. Play Gridlock with a friends or Detonate with up to 4 players. Gridlock blends connect 4, tic tac toe, and adds a twist. Detonate is a game of trickery. Bombs placed on a map, defuse them to win. Bombs can be infered be minesweeper style clues. Built with React, Node, Express, and Socket.io.',
            url: 'https://tacblock.com/',
            github: 'https://github.com/Abarragan89/tacblok',
            alt: 'landing page for Tacblok website',
            technologies: 'Next.Js | TypeScript | Socket.io,| Express.Js'
        },
        {
            name: 'Math Fact Missions',
            photoRoute: 'mathFactMissions',
            description: 'This is a full-stack, subscription-based Next.js app for teachers. Teachers create student accounts, track progress, and edit details via a dashboard. Students complete missions, play review games, and take quizzes to earn points and unlock upgrades for Three.js avatars, while learning their math facts!',
            url: 'https://www.math-fact-missions.com/',
            github: 'https://github.com/Abarragan89/math-missions',
            alt: 'landing page for Math Fact Missions website',
            technologies: 'Next.Js | TypeScript | MongoDB | Three.Js | Canvas API | Stripe API'
        },
        {
            name: 'Cannon Ball Sea',
            photoRoute: 'cannon-ball',
            description: 'My first published game on the App Store. 45 levels of fun! Try to hit the TNT handle and watch it explode. Obstacles stand in your way and things do get challenging. Use points earned to level up your cannon and cannon balls to complete all 45 levels and collect all stars! Created using React Native.',
            url: 'https://apps.apple.com/us/app/cannon-ball-sea/id6736433554',
            github: 'https://github.com/Abarragan89/cannon-ball',
            alt: 'link for cannon ball in app store',
            technologies: 'React Native | Expo | React Native Game Engine | SQLite'

        },
        {
            name: 'Unfinished Pages',
            photoRoute: 'unfinished-pages',
            description: 'Complete blogging platform build on the Next.js framework utilizing Prisma ORM, S3 for image storage, NextAuth authentication, and Slate.js for customized text editor. Users can comment on blogs, like blogs, and make a request to become and editor to create and publish their own blogs. SEO optimized and complete with email notifications when engagement occurs on a your blog or a blog you engaged with.',
            url: 'https://www.unfinishedpages.com/',
            github: 'https://github.com/Abarragan89/unfinished-pages',
            alt: 'snapshot of unfinished pages website',
            technologies: 'TypeScript | Next.Js | Prisma | NextAuth | Slate.Js'

        },
        // {
        //     name: 'Lunaris Finance',
        //     photoRoute: 'lunaris-large',
        //     description: 'This is a mobile-optimized full-stack expense tracker (PWA). Enter your income, track expenses, customize categories, and view net profit monthly. Lunaris saves history for breakdowns of past months and yearly snapshots, helping you identify spending trends. Built with Python, Flask, and SQLAlchemy for SQL database access.',
        //     url: 'https://lunaris-finance.herokuapp.com/',
        //     github: 'https://github.com/Abarragan89/lunar',
        //     alt: 'landing page for Lunaris Finance',
        //     technologies: 'Python | Flask | SQLAlchemy | Charts.py'

        // },
        // {
        //     name: 'Who Nose That?!',
        //     photoRoute: 'who-nose-that-large',
        //     description: 'Create your own Jeopardy-style game boards with Who Nose That! Edit or use public game boards and generate flashcards from questions with a click. Students can study flashcards via their login, and there\'s a bonus round for correct answers. Designed for student engagement and teacher usability, anyone can create an account and make their own board—perfect for parties and gatherings!',
        //     url: 'https://who-nose-that.com',
        //     github: 'https://github.com/Abarragan89/trivia_maker',
        //     alt: 'landing page for Who Nose That website',
        //     technologies: 'React.Js | MongoDB | Express.Js | GraphQL'

        // },
        // {
        //     name: 'The Sunday Social',
        //     photoRoute: 'the-sunday-social',
        //     description: 'The Sunday Social is a social media app for those who want to connect once a week—specifically on Sundays. It features a laid-back, beach vibe where users can create profiles, find friends through searchable traits, make posts, comment, like, and message each other. The app uses Socket.io for real-time messaging and group chatting. Join the wave today!',
        //     url: 'https://the-sunday-social-b780c9b989cc.herokuapp.com/',
        //     github: 'https://github.com/Abarragan89/the-sunday-social',
        //     alt: 'landing page for The Sunday Social website',
        //     technologies: 'React.Js | MySQL | Socket.io | GraphQL | Nodemailer'

        // },
        // {
        //     name: 'Dinner and Drinks',
        //     photoRoute: 'dinner-drinks-large',
        //     description: 'Let us help you find food and alcohol recipes based on cuisine, dietary restrictions, or liquor available. Just select your craving, dietary lifestyle, and available alcohol, and several recipes will generate using the Spoonacular and Cocktails DB APIs.',
        //     url: 'https://abarragan89.github.io/dinner-drinks/',
        //     github: 'https://github.com/Abarragan89/dinner-drinks',
        //     alt: 'landing page for Dinner and Drinks website',
        //     technologies: 'JavaScript| SpoonacularAPI | CocktailDB | Storage API '

        // },
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