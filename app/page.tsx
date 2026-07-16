import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorAnimation from "./components/CursorAnimation";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <CursorAnimation />
      <Header />
      <Banner />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </main>
  );
}
