import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { useRef } from "react";
import { ScrollProvider } from "./components/context/ScrollContext"
import './App.css';
import Navbar from "./components/layout/Navbar"
import Marcacao from "./components/pages/Marcacao";
import Home from "./components/pages/Home";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";


function App() {
  const sobreRef = useRef(null);
  const staffRef = useRef(null);
  const homeRef = useRef(null);
  const precarioRef = useRef(null);
  const marcacaoRef = useRef(null);
  
  return (
    <ScrollProvider>
      <Router>
        <Navbar sobreRef={sobreRef} staffRef={staffRef} homeRef={homeRef} precarioRef={precarioRef}/>
        <Container referencia={homeRef} customClass="min_height">
          <Routes>
            <Route path="/" element={<Home sobreRef={sobreRef} staffRef={staffRef}  precarioRef={precarioRef}/>} />
            <Route path="/marcacao" element={<Marcacao ref={marcacaoRef}/>} />
                
        </Routes>
        </Container>
        <>
        teste vagabundo
        
        </>
        <Footer/>
      </Router>
    </ScrollProvider>
      
  );
}

export default App;
