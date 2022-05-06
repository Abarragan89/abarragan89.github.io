function Contact () {
    return (
        <section>
            <h3 className='section-heading'>Contact  Me</h3>
            <form id='contact-form'>
                <div className="form-div">
                    <label htmlFor='name'>Name:</label><br/>
                    <input type='text' name='name' id='name' />    
                </div>
                <div className="form-div">
                    <label htmlFor='email'>Email:</label><br/>
                    <input type='email' name='email' id='email' />    
                </div>
                <div className="form-div">
                    <label htmlFor='message'>Message:</label><br/>
                    <textarea type='message'  rows='5' name='message' id='message' />    
                </div>
                <div className="form-div">
                    <button type='submit' id='contact-submit'>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;