import ReactDOM from 'react-dom';
import '../css/Contact.css';
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='contact'>
            <h2 className='contact-h2'>For collaborations, freelance work, or any other inquiries, shoot me an Email</h2>
            <h2 className='contact-p'>marshallbobotis@outlook.com</h2>
            <h2 className='linkedin-button'><a href='https://www.linkedin.com/in/marshall-bobotis-593342319/' target='_blank'><FaLinkedin /></a></h2>
        </div>
    );
}

export default Contact;