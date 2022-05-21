import useSound from 'use-sound';
import homeSwish from '../../assets/sounds/swish.wav';
import { useEffect, useRef } from 'react';

function Homepage({ hasEntered, setHasEntered }) {
    const [playSwish, { stop }] = useSound(homeSwish, { volume: '.5' });

    function enterPage() {
        setHasEntered(!hasEntered);
        setTimeout(playSwish, "1000");
    }
    // target the Canvas and set up Animation
    const canvasEl = useRef(null);

    // Conditionally render this useEffect to create Canvas Logic
    useEffect(() => {
        if(!hasEntered){

            const canvas = canvasEl.current
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particlesArray = [];
            let hue = 0;
    
            window.addEventListener('resize', function () {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            })
            const mouse = {
                x: undefined,
                y: undefined,
            }
            // Create particles on mousemove
            canvas.addEventListener('mousemove', function (event) {
                mouse.x = event.x;
                mouse.y = event.y;
                for (let i = 0; i < 1; i++) {
                    particlesArray.push(new Particle());
                }
            })
            // Create particles on mouse click
            canvas.addEventListener('click', function (event) {
                //takes mouse event location and assigns it to the custom 'mouse' object
                mouse.x = event.x;
                mouse.y = event.y;
                for (let i = 0; i < 1; i++) {
                    particlesArray.push(new Particle());
                }
    
            })
            // Particle constructor
            class Particle {
                constructor() {
                    this.x = mouse.x;
                    this.y = mouse.y;
                    this.size = Math.random() * 25 + 1;
                    this.speedX = Math.random() * 3 - 1.5;
                    this.speedY = Math.random() * 3 - 1.5;
                    this.color = 'rgb(0, 255, 76)'
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.size > 0.2) this.size -= 0.1;
                }
                draw() {
                    ctx.fillStyle = this.color;
                    ctx.lineWidth = 1
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                    ctx.fill()
                }
            }
            //we just need to push things into the array and this function is called 
            //in the animate and draws adn clears Rect
            function handleParticles() {
                for (let i = 0; i < particlesArray.length; i+=2) {
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
            }
        }, [1]);
    return (<>
        {hasEntered ?
            <section id='homepage-title'>
                <h1>Anthony Barragan</h1>
                <p className='heading-bar'></p>
                <h2>Full Stacker Developer</h2>
            </section> :
            <div id='button-background'>
            <canvas ref={canvasEl}>
            </canvas>
            <button type='button' id='homepage-enter' onClick={enterPage}>Enter</button>
            </div>}
            </>
    )

}

export default Homepage;