import Navbar from './Components/Navbar';
import Paragraphs from './Components/Paragraphs';
import Projects from './Components/ProjectsDisplay';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='home text-justify d-flex flex-column align-items-center mt-5'>
        <Paragraphs />
        <Skills />
        <Projects />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
      <ScrollToTop />
    </>
  );
}

export default App;
