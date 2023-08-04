import './App.css';
import About from './components/Aboutcom';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Header from './components/Header';
import Nav from './components/Nav';
import Testmoniaa from './components/Testmoniaa';
import Contactcom from './components/Contactcom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testmoniaa/>
      <Contactcom/>
      <Footer/>
    </div>
  );
}

export default App;
