import Home from './Page/Home';
import Poneys from './Page/Poneys';
import Contact from './Page/Contact';
import About from './Page/About';
import Poneytalk from './Page/Poneytalk';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/poneys" element = {<Poneys />}></Route>
      <Route path="/contact" element = {<Contact />}></Route>
      <Route path="/about" element = {<About />}></Route>
      <Route path="/poneytalk" element = {<Poneytalk />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
