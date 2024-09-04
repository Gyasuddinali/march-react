
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Context from './Components/Context';
import CovidData from './Components/CovidData';
import { Route, Routes } from 'react-router';
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={Home}></Route>
<Route path='/about' element={About}></Route>
<Route path='/contact' element={Contact}>

</Route>
</Routes>


      </BrowserRouter>
     
      <CovidData></CovidData>
      <FontAwesomeIcon icon={faTwitter}/>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faInstagram}/>
      <FontAwesomeIcon icon={faFacebook} />
        <h1>hello world</h1>

        <Context> </Context>
        
    </div>
  );
}

export default App;
