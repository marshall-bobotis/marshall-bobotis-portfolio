import ReactDOM from 'react-dom';
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa";;
import '../css/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <img src="marshall.png" alt='Marshall' className='hero-img' />
            <div className='hero-details'>
                <h1 className='hero-name'>Marshall Bobotis</h1>
                <p className='hero-pronouns'>He/Him</p>
                <h1 className='hero-h1'>Full Stack Web Dev</h1>
            </div>
            <div className='hero-stack'> 
            <FaReact />
            <DiMongodb />
            <FaGitAlt />
            </div>
        </div>
    );
}

export default Hero;