import ReactDOM from 'react-dom';
import '../css/Stack.css';
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
const Stack = () => {
    return (
        <div className='stack'>
            <h2>Tech Stack</h2>
            <div className='stack-icons'>
                <FaHtml5 />
                <IoLogoCss3 />
                <IoLogoJavascript />
                <FaReact />
                <FaNodeJs />
                <SiMongodb />
                <FaNpm />
                <FaGitAlt />
            </div>
        </div>
    );
};

export default Stack;