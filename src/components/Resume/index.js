import resume from '../../assets/documents/resume.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <>
        <h3 className='section-heading'>Resume</h3>
        <p className='heading-bar'></p>
        <Document file={resume}>
              <Page pageNumber={1} />
              <br></br>
              <p className='heading-bar'></p>
              <br></br>
              <Page pageNumber={2} />
        </Document>
        </>
    )
}

export default Resume;