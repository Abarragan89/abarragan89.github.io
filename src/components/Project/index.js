function Project() {
    // Photos are 1000 by 800 px
    const photoData = [
        {
            name: 'Expense Tracker',
            route:'expense-tracker-large'
        },
        {
            name: 'Dinner and Drinks',
            route:'dinner-drinks-large'
        },
        {
            name: 'Math Madness',
            route:'math-madness-large'
        },
        {
            name: 'Run Buddy',
            route:'run-buddy-large'
        },
        {
            name: 'Weather Watcher',
            route:'weather-watcher-large'
        },
        {
            name: 'Work Scheduler',
            route:'work-scheduler-large'
        },
        {
            name: 'Treasure Map',
            route:'treasure-map-large'
        },
        {
            name: 'Snake Game',
            route:'snake-game-large'
        }

        
    ];
    return (
        <section className='project-display'>
            {photoData.map((project, i) => 
                (
                <figure className='gallery-cards' key={i}>
                    <img src={require(`../../assets/large/${project.route}.png`)} />
                </figure>
                )
            )} 
        </section>
    )
}
{/* <img src={require('../../assets/large/expense-tracker-large.png')} /> */}
export default Project;