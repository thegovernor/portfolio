import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contactme/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Main-banner/Header';
import Project from './Components/Projects/Projects';
import Articles from './Components/Articles/Articles';



function App() {
  return (<>
  
    <Header></Header>
    <Aboutme></Aboutme>
    <Project></Project>
    <Articles></Articles>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
