import { useEffect, useRef, useState } from 'react';
import Particle from '../../../utils/Particle';
import { GoTriangleDown } from "react-icons/go";
import About from '../../components/About';
import StatSection from '../../components/StatSection';
import './index.css';
import Project from '../../components/Project';
import PrintResume from '../Resume';
import Heading from '../../components/Heading';

function Homepage() {
    // target the Canvas and set up Animation
    const canvasEl = useRef(null);
    const particlesArray = [];

    useEffect(() => {
        const canvas = canvasEl.current
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })

        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i += 2) {
                particlesArray[i].update();
                particlesArray[i].draw();

                for (let j = i; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = particlesArray[i].color;
                        ctx.lineWidth = 0.2;
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            handleParticles();
            requestAnimationFrame(animate);
        }
        animate();

        function initialHTMLCanvasAnimationNameIntro() {
            for (let i = 0; i < window.innerWidth; i += 15) {
                setTimeout(() => {
                    particlesArray.push(new Particle(ctx, i, 320));
                }, Math.floor(i / 1.5))
            }
        }

        function initialHTMLCanvasAnimationDescriptionIntro() {
            for (let i = 0; i < window.innerWidth; i += 15) {
                setTimeout(() => {
                    particlesArray.push(new Particle(ctx, window.innerWidth - i, 400));
                }, Math.floor(i / 1.5))
            }
        }

        // Timeout functions
        const nameIntroTimeout = setTimeout(() => {
            initialHTMLCanvasAnimationNameIntro();
        }, 800);

        const descriptionIntroTimeout = setTimeout(() => {
            initialHTMLCanvasAnimationDescriptionIntro();
        }, 2000);

        // Cleanup function to clear timeouts
        return () => {
            clearTimeout(nameIntroTimeout);
            clearTimeout(descriptionIntroTimeout);
        }
    }, []);

    // How far the user has scrolled
    const [scrollY, setScrollY] = useState(0);

    const [style, setStyle] = useState({
        textAlign: 'center',
        position: "fixed",
        top: '300px',
        left: '0',
        right: '0',
    });
    const [downArrowStyle, setDownArrowStyle] = useState({ display: 'block' });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollY(scrollPosition);
            const newTop = Math.max(-15, 300 - scrollPosition); // Move upwards
            const newLeft = Math.max(-window.innerWidth + 210, 0 - scrollPosition * 3); // Move left
            const newScale = Math.max(0.43, 1 - (scrollPosition / 200))

            // set Styles for header when scrolling
            setStyle({
                textAlign: 'center',
                position: 'fixed',
                top: `${newTop}px`,
                left: `${newLeft}px`,
                right: '0px',
                transform: `scale(${newScale})`,
                transition: '0.2', // Smooth transition
            });

            // Make Dowon arrow disappear
            if (scrollPosition > 30) {
                setDownArrowStyle({ display: 'none' })
            } else {
                setDownArrowStyle({ display: 'block' })
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <main id="homepage-main">
            <div id='homepage-title' style={style}>
                <h1>Anthony Barragan</h1>
                <p className='heading-bar'></p>
                <h2>Full Stack Developer</h2>
                <div className='homepageDownArrow' style={downArrowStyle}>
                    <GoTriangleDown />
                </div>
            </div>

            <canvas ref={canvasEl} id='home-section'></canvas>


            <section id='ratings'>
                <Heading text='Developer Ratings' />
                {/* Ratings Key */}
                <div className='ratings-key-main-div'>
                    <div className='star-rating-key-div'>
                        <p>★</p>
                        <h5>Familiar</h5>
                    </div>
                    <div className='star-rating-key-div'>
                        <div className='star-key-div'>
                            <p>★</p>
                            <p>★</p>
                        </div>
                        <h5>Utilized</h5>
                    </div>
                    <div className='star-rating-key-div'>
                        <div className='star-key-div'>
                            <p>★</p>
                            <p>★</p>
                            <p>★</p>
                        </div>
                        <h5>Proficient</h5>
                    </div>
                </div>
                <StatSection />
            </section>

            <section id='about'>
                <Heading text='About Me' />
                <About />
            </section>

            <section id='projects'>
                <Heading text='Projects' />
                <Project />
            </section>

            <section id='resume'>
                <Heading text='Resume' />
                <PrintResume />
            </section>


        </main>
    )

}

export default Homepage;