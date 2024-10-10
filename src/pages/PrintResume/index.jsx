import { Link } from 'react-router-dom';
import click from '../../assets/sounds/click.wav';
import useSound from 'use-sound';

function PrintResume () {
    const [clickSound] = useSound(click, { volume: '.5' });
    return (
        <div id='resume-pdf'>
            <embed src='resume.pdf' type='application/pdf' />
        </div>
    )
}

export default PrintResume;