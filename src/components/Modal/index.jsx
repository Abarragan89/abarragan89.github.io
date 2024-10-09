function Modal({ project, onClose }) {
    return (
        <div className='modalBackdrop'>
            <div className="modalContainer">
                <h3 className='modal-title'>{project.name}</h3>
                <img className='modal-picture' src={`images/large/${project.photoRoute}.png`} alt='snapshot of chosen project' />
                <p className='modal-description'>{project.description}</p>
                <div id="modal-btn-group">
                    <a href={project.url} className='modal-links' target='_blank' rel='noopener noreferrer'>Website</a>
                    <a href={project.github} className='modal-links' target='_blank' rel='noopener noreferrer'>Github</a>
                    <button type='button' className='modal-btn-close' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;