import './index.css';

function PrintResume () {
    return (
        <div id='resume-pdf'>
            <embed src='resume.pdf' type='application/pdf' />
        </div>
    )
}

export default PrintResume;