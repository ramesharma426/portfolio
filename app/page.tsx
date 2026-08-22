import { Spine } from "./components/Spine";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Articles } from "./components/Articles";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <a href="#about" className="skip">
        Skip to content
      </a>
      <Spine />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
