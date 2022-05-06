import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Modal from '../Modal';

function Project() {
    // Photos are 1000 by 800 px
    const photoData = [
        {
            name: 'Expense Tracker',
            photoRoute: 'expense-tracker-large',
            description: 'This is an full-stack expense tracker. Enter your monthly income to keep track of your monthly usage. Add category tags and then add expenses to those tags. Your data will be displayed using Charts.js. Every Month, your expense resets and expenses marked as \'monthly\' are automatically deducted. This uses Sequelized to access a SQL database. Express.js is used to create server routes.',
            url: 'https://floating-dusk-25843.herokuapp.com/',
            github: 'https://github.com/TigranBalayan10/expense-tracker'
        },
        {
            name: 'Dinner and Drinks',
            photoRoute: 'dinner-drinks-large'
        },
        {
            name: 'Math Madness',
            photoRoute: 'math-madness-large'
        },
        {
            name: 'Run Buddy',
            photoRoute: 'run-buddy-large'
        },
        {
            name: 'Weather Watcher',
            photoRoute: 'weather-watcher-large'
        },
        {
            name: 'Work Scheduler',
            photoRoute: 'work-scheduler-large'
        },
        {
            name: 'Treasure Map',
            photoRoute: 'treasure-map-large'
        },
        {
            name: 'Snake Game',
            photoRoute: 'snake-game-large'
        }
    ];
    useEffect(() => {
        Aos.init({});
    })
    const [isModal, setIsModal] = useState(false)
    const [currentProject, setCurrentProject] = useState('')

    function toggleModal (project) {
        setCurrentProject(project)
        setIsModal(!isModal)
    }

    function closeModal () {
        setIsModal(!isModal);
    }

    return (
        <section className='project-display'>
            {isModal && <Modal project={currentProject} onClose={closeModal} />}
            {photoData.map((project, i) =>
            ( [
                <figure
                    data-aos='flip-up'
                    data-aos-delay="500"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-center"
                    className='gallery-cards' key={i}>
                    <img src={require(`../../assets/large/${project.photoRoute}.png`)}  onClick={() => toggleModal(project)}/>
                </figure>
                ]
            )
            )}
        </section>
    )
}
export default Project;