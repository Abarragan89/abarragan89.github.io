// import useSound from 'use-sound';
import { useEffect, useRef } from 'react';
import Particle from '../../utils/Particle';

function Homepage() {
    // const [playSwish, { stop }] = useSound(homeSwish, { volume: '.5' });

    // target the Canvas and set up Animation
    const canvasEl = useRef(null);
    const particlesArray = [];

    // Conditionally render this useEffect to create Canvas Logic
    useEffect(() => {
        const canvas = canvasEl.current
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })
        // Create particles on mousemove
        // delay this listener so the initial animation can run
        setTimeout(() => {
            canvas.addEventListener('mousemove', function (event) {
                for (let i = 0; i < 1; i++) {
                    particlesArray.push(new Particle(ctx, event.x, event.y));
                }
            })
        }, 3000)

        //we just need to push things into the array and this function is called 
        //in the animate and draws adn clears Rect
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
            for (let i = 0; i < window.innerWidth; i += 8) {
                setTimeout(() => {
                    particlesArray.push(new Particle(ctx, i, (window.innerHeight / 2) - 60));
                }, Math.floor(i / 1.5))
            }
        }

        setTimeout(() => {
            initialHTMLCanvasAnimationNameIntro()
        }, 800)
    }
    );


    return (
        <>
            <section id='homepage-title'>
                <h1>Anthony Barragan</h1>
                <p className='heading-bar'></p>
                <h2>Full Stack Developer</h2>
            </section>
            <canvas ref={canvasEl}>
            </canvas>
        </>
    )

}

export default Homepage;