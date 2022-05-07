import useSound from 'use-sound';
import homeSwish from '../../assets/sounds/swish.wav';

function Homepage({hasEntered, setHasEntered}) {
    const [playSwish, { stop }] = useSound(homeSwish,{ volume:'.5'});

    function enterPage() {
        setHasEntered(!hasEntered);
        setTimeout(playSwish, "2100");
    }
    return (<>
                {hasEntered ? 
                <section id='homepage-title'>
                    <h1>Anthony Barragan</h1>
                    <p className='heading-bar'></p>
                    <h2>Full Stacker Developer</h2>
                </section> :
                <div id='button-background'>
                    <button type='button' id='homepage-enter'onClick={enterPage}>Enter</button>
                </div>}
            </>
    )
            
}

export default Homepage;