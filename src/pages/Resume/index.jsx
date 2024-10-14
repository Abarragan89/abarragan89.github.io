import './index.css';

function PrintResume () {
    return (
        <div id='resume-pdf'>
            <embed src='resume.pdf' type='application/pdf' />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default PrintResume;