import './index.css';

function PrintResume () {
    return (
        <div 
        id='resume-pdf'
        data-aos='zoom-in'
        data-aos-duration='1500'
        >
            <embed src='resume.pdf' type='application/pdf' />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default PrintResume;