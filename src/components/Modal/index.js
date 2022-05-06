import 'bootstrap/dist/css/bootstrap.min.css';

function Modal({ project, onClose }) {
    return (
        <div className='modalBackdrop'>
            <div className="modalContainer">
            <img className='modal-picture' src={require(`../../assets/large/${project.photoRoute}.png`)} />
                <h3 className='modal-title'>{project.name}</h3>
                <p className='modal-description'>{project.description}</p>
                <a href={project.url} className='modal-links' >Go To Site</a>
                <a href={project.github} className='modal-links'>Github Repo</a>
                <button type='button' onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal;