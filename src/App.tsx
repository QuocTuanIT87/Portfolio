import Hero from "./components/Hero";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Languages from "./components/Languages";
import Learning from "./components/Learning";
import Sports from "./components/Sports";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <div>
      {/* Hero / Header */}
      <Hero />

      <Divider />

      {/* Education */}
      <Education />

      <Divider />

      {/* About / Self Introduction */}
      <About />

      <Divider />

      {/* Work Experience */}
      <Experience />

      <Divider />

      {/* Personal Projects */}
      <Projects />

      <Divider />

      {/* Technologies */}
      <Technologies />

      <Divider />

      {/* Languages */}
      <Languages />

      <Divider />

      {/* Currently Learning */}
      <Learning />

      <Divider />

      {/* Favourite Sports */}
      <Sports />

      <Divider />

      {/* Hobbies & Interests */}
      <Hobbies />

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}

export default App;
