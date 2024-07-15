import Header from "./Header";
import Introduction from "./Introduction";
import Nav from "./Nav";
import AboutMe from "./Aboutme";
import Arrowdirection from "./Arrowdirection";
import Title from "./Title";
import Experience from "./Experience";
import Skills from "./Experience";
import Bothskills from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <body>
      <Header />
      <Introduction />
      <Title prytitle="Get To Know More" sectitle="About Me" />
      <AboutMe />
      <Arrowdirection />
      <Title prytitle="Explore My" sectitle="Experience" />
      <Bothskills />
      <Arrowdirection />
      <Title prytitle="Browse My" sectitle="Projects" />
      <Projects />
      <Arrowdirection />
      <Title prytitle="Get In Touch" sectitle="Contact Me" />
      <Contact />
    </body>
  );
}

export default App;
