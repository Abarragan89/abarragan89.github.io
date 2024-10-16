import { IoCloseOutline } from "react-icons/io5";
import './index.css';

function Modal({ project, onClose }) {

    return (
        <div className='modalBackdrop' onClick={onClose}>
            <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                <IoCloseOutline className='closeModalX' size='30px' onClick={onClose} />
                <h3 className='modal-title'>{project.name}</h3>
                <img className='modal-picture' src={`images/large/${project.photoRoute}.png`} alt='snapshot of chosen project' />
                <p className='modal-description'>{project.description}</p>
                <div id="modal-btn-group">
                    <a href={project.url} className='modal-links' target='_blank' rel='noopener noreferrer'>Website</a>
                    <a href={project.github} className='modal-links' target='_blank' rel='noopener noreferrer'>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;