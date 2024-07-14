import Header from "./Header";
import Introduction from "./Introduction";
import Nav from "./Nav";
import AboutMe from "./Aboutme";
import Arrowdirection from "./Arrowdirection";
import Title from "./Title";
import Experience from "./Experience";
import Skills from "./Experience";

function App() {
  return (
    <body>
      <Header />
      <Introduction />
      <Title prytitle="Get To Know More" sectitle="About Me" />
      <AboutMe />
      <Arrowdirection />
      <Title prytitle="Explore My" sectitle="Experience" />
      <Skills />
    </body>
  );
}

export default App;
