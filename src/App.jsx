import Home from './Page/Home';
import Poneys from './Page/Poneys';
import Contact from './Page/Contact';
import About from './Page/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/poneys" element = {<Poneys />}></Route>
      <Route path="/contact" element = {<Contact />}></Route>
      <Route path="/about" element = {<About />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
