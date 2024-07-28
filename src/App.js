import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
};
 
export default App;