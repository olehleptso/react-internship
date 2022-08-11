import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Carousel from './components/Carousel/Carousel';
import Feedback from './components/Feedback/Feedback';
import Process from './components/Process/Process';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <HeaderContainer/>
      <About/>
      <Carousel/>
      <Process/>
      <Services/>
      <Feedback/>
    </div>
  );
}

export default App;
