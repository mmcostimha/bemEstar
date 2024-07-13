import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScroll } from '../context/ScrollContext';
import styles from "./Navbar.module.css";
import Container from "./Container";


function Navbar({sobreRef,staffRef,homeRef,precarioRef,marcacaoRef}){

    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { setScrollToSection } = useScroll(); 
    const navigate = useNavigate();
    
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

    const onClickHandle = (e, ref,page) => {
        e.preventDefault();
        console.log(page);
        if (location.pathname === page) {
            ref?.current?.scrollIntoView({ behavior: 'smooth' });
        }else{
            setScrollToSection(ref);
            navigate(page);
            console.log(page);
        }
    };

    return(
        <nav className={scrolled ? styles.scrolled:styles.navbar}>
            <Container>
                <Link className={styles.navbar_logo } to="/"><img src="https://picsum.photos/150/100" alt="Home"/></Link> 
                <ul className={styles.list}>   
                    <li className={styles.item}><Link  onClick={(e)=> onClickHandle(e,homeRef,"/")}>Home</Link></li>
                    <li className={styles.item}><Link  onClick={(e)=> onClickHandle(e,sobreRef,"/")} >Sobre</Link></li>
                    <li className={styles.item}><Link  onClick={(e)=> onClickHandle(e,staffRef,"/")}>Proficionais</Link></li>
                    <li className={styles.item}><Link  onClick={(e)=> onClickHandle(e,precarioRef,"/")}>Preçário</Link></li>
                    <li className={styles.item}><Link  onClick={(e)=> onClickHandle(e,marcacaoRef,"/marcacao")}>Marcação</Link></li>
                    {/* <li className={styles.item}><Link to="/login">Login</Link></li> */}
                </ul>
            </Container>
            
        </nav>  
    )
}

    


export default Navbar;