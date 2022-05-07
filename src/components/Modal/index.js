function Modal({ project, onClose }) {
    return (
        <div className='modalBackdrop'>
            <div className="modalContainer">
            <img className='modal-picture' src={require(`../../assets/large/${project.photoRoute}.png`)} />
                <h3 className='modal-title'>{project.name}</h3>
                <p className='modal-description'>{project.description}</p>
                <div id="modal-btn-group">
                <a href={project.url} className='modal-links' target='_blank'>Website</a>
                <a href={project.github} className='modal-links' target='_blank'>Github</a>
                <button type='button' className='modal-btn-close' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;