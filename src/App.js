import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';



function App() {
  return (<div >
  <Navbar />
  <Hero />
  <Timer duration={2 * 24 * 60 * 60 * 1000}/>
  </div>
  
  );
}

export default App;
