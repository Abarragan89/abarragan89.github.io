import StatCard from '../StatCard';
import { useState } from 'react';
import './index.css';

export default function StatSection() {

    const [skillData, setSkillData] = useState([
        {
            category: 'Core Languages',
            ratings: [
                {
                    name: 'TypeScript',
                    rating: 3
                },
                {
                    name: 'JavaScript ES6+',
                    rating: 3
                },
                {
                    name: 'Python',
                    rating: 2
                },
                {
                    name: 'SQL',
                    rating: 3
                },
                {
                    name: 'NoSQL',
                    rating: 3
                }
            ]
        },
        {
            category: 'Frontend',
            ratings: [
                {
                    name: 'React.js/Next.js',
                    rating: 3
                },
                {
                    name: 'React Native',
                    rating: 3
                },
                {
                    name: 'JQuery',
                    rating: 3
                },
                {
                    name: 'Three.js',
                    rating: 2
                },
                {
                    name: 'HandleBars',
                    rating: 2
                },
                {
                    name: 'Jinja2',
                    rating: 2
                },
            ]
        },
        {
            category: 'Backend',
            ratings: [
                {
                    name: 'Express.js',
                    rating: 3
                },
                {
                    name: 'Prisma',
                    rating: 3
                },
                {
                    name: 'Sequelize/SQLAlchemy',
                    rating: 3
                },
                {
                    name: 'MongoDB/Mongoose',
                    rating: 3
                },
                {
                    name: 'GraphQL',
                    rating: 3,
                },
                {
                    name: 'Flask',
                    rating: 2,
                },
            ]
        },
        {
            category: 'CSS Frameworks',
            ratings: [
                {
                    name: 'Bootstrap',
                    rating: 3
                },
                {
                    name: 'Tailwind',
                    rating: 3
                },
                {
                    name: 'Bulma',
                    rating: 3
                },
                {
                    name: 'SASS',
                    rating: 3
                },
                {
                    name: 'Custom CSS',
                    rating: 3
                },
            ]
        },
        {
            category: 'Misc.',
            ratings: [
                {
                    name: 'Git',
                    rating: 3
                },
                {
                    name: 'Node/NPM',
                    rating: 3
                },
                {
                    name: 'PIP',
                    rating: 2
                },
                {
                    name: 'WordPress',
                    rating: 1
                },
                {
                    name: 'Ability to Learn!',
                    rating: 3
                },
            ]
        }

    ]);

    console.log(skillData)

    return (
        <section className='stat-section'>
            {skillData && skillData.map((cardData, index) => {
                return (
                    <div key={index} className={`${index === 0 ? 'first-stat-card' : 'stat-card'}`}>
                        <StatCard
                            cardData={cardData}
                            indexNumber={index}
                        />
                    </div>
                )
            })}

        </section>
    );
}