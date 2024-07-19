import { Link, useNavigate, useLocation} from "react-router-dom";
// import styles from "../Navbar.module.css";
import styles from "./PageLinks.module.css"
import { useScroll } from '../../context/ScrollContext';

function PageLinks({sobreRef,staffRef,homeRef,precarioRef,marcacaoRef,scrolled}){
    const navigate = useNavigate();
    const location = useLocation();
    const { setScrollToSection } = useScroll(); 

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
        <ul className={styles.list}>   
            <li className={!scrolled ? (styles.item) :(styles.itemScrolled)}><Link  onClick={(e)=> onClickHandle(e,homeRef,"/")}>Home</Link></li>
            <li className={!scrolled ? (styles.item) :(styles.itemScrolled)}><Link  onClick={(e)=> onClickHandle(e,sobreRef,"/")} >Sobre</Link></li>
            <li className={!scrolled ? (styles.item) :(styles.itemScrolled)}><Link  onClick={(e)=> onClickHandle(e,staffRef,"/")}>Proficionais</Link></li>
            <li className={!scrolled ? (styles.item) :(styles.itemScrolled)}><Link  onClick={(e)=> onClickHandle(e,precarioRef,"/")}>Preçário</Link></li>
            <li className={!scrolled ? (styles.item) :(styles.itemScrolled)}><Link  onClick={(e)=> onClickHandle(e,marcacaoRef,"/marcacao")}>Marcação</Link></li>
        </ul>
    )
}
export default PageLinks