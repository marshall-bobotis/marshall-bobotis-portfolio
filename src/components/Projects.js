import react from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import '../css/Projects.css';
const Projects = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className='project-row'> 
                <div className='each-project'>
                    <a href="https://shurochi.com" target='_blank'>
                        <img src="shuro.png" alt="shurochi.com" />
                    </a>
                    <p>Page that explains the install and setup process of a Destiny 2 Wish Wall macro.<br></br><FaHtml5 /><IoLogoCss3 /><IoLogoJavascript /></p>
                </div>
                <div className='each-project'>
                    <a href="https://github.com/marshall-bobotis/project-slingair" target='_blank'>
                        <img src="slingair.png" alt="Project 2" />
                    </a>
                    <p>Full Stack flight booking app with a functional backend via MongoDB <SiMongodb /> and React <FaReact /> frontend to render booked seats</p>
                </div>
                <div className='each-project'>
                    <a href="https://github.com/marshall-bobotis/project-js-nyan-cat" target='_blank'>
                        <img src="nyan-cat.jpg" alt="Nyan Cat Game" />
                    </a>
                    <p>Object Oriented Nyan Cat Game.<br></br><FaHtml5 /><IoLogoCss3 /><IoLogoJavascript /></p>
                </div>
            </div>
 
        </div>
    );
}

export default Projects;