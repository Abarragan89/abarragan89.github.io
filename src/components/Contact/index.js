import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import useSound from 'use-sound';
import emailSubmit from '../../assets/sounds/emailSubmit.wav';


function Contact () {
    const [emailNoise, { stop }] = useSound(emailSubmit,{ volume:'.5'});
    const [ formState, setFormState] = useState({name: '', email: '', message: ''})
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }
        setFormState({...formState, [e.target.name]: e.target.value})
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
        emailNoise();
        setFormState({name: '', email: '', message: ''})
    }

    return (
        <section className='section'>
            <h3 className='section-heading'>Contact  Me</h3>
            <p className='heading-bar'></p>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className="form-div">
                    <label htmlFor='name'>Name:</label><br/>
                    <input type='text' defaultValue={name} name='name' id='name' onBlur={handleChange}/>    
                </div>
                <div className="form-div">
                    <label htmlFor='email'>Email:</label><br/>
                    <input type='email' defaultValue={email} name='email' id='email' onBlur={handleChange}/>    
                </div>
                <div className="form-div">
                    <label htmlFor='message'>Message:</label><br/>
                    <textarea type='message' defaultValue={message} rows='5' name='message' id='message' onBlur={handleChange}/>    
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="form-div">
                    <button type='submit' id='contact-submit'>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;