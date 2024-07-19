import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Container from "./Container";
import useWindowSize from "../context/WindowSize";
import NavbarMenu from "./NavbarMenu";
import PageLinks from "./sub-components/PageLinks";

function Navbar({sobreRef,staffRef,homeRef,precarioRef,marcacaoRef}){

    const [scrolled, setScrolled] = useState(false);
    const { width } = useWindowSize();

    useEffect(()=> {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(scrollTop>0)
                setScrolled(true)
            else
                setScrolled(false) 
        };

        window.addEventListener("scroll",handleScroll)
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    })

   
    return(
        <nav className={scrolled ? styles.scrolled:styles.navbar}>
            <Container>
                <Link className={styles.navbar_logo } to="/"><img src="https://picsum.photos/150/100" alt="Home"/></Link> 
                {console.log("Testando:  ")}
                {console.log(useWindowSize.width)}
                {width < 768 ? <NavbarMenu scrolled={scrolled}/> :<PageLinks scrolled={scrolled} sobreRef={sobreRef} staffRef={staffRef} homeRef={homeRef} precarioRef={precarioRef} marcacaoRef={marcacaoRef}/>}
            </Container>
        </nav>  
    )
}

    


export default Navbar;