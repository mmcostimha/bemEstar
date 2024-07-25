
import { GrMenu } from "react-icons/gr";
import styles from "./NavbarMenu.module.css";
import { useEffect, useState } from "react";
import PageLinks from "./sub-components/PageLinks";
import { IoTriangle } from "react-icons/io5";
function NavbarMenu({scrolled,sobreRef, staffRef,homeRef, precarioRef,marcacaoRef,navMenuRef}){

    const [menuPage,setMenuPage] = useState(false);

    function clickHandler(e){
        e.preventDefault();
        setMenuPage(!menuPage);
        console.log(menuPage);
    }

    useEffect(() => {
        const handler = (e) => {
            if (navMenuRef && navMenuRef.current && !navMenuRef.current.contains(e.target)) {
                setMenuPage(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [navMenuRef]);

    return(
        <div ref={navMenuRef} className={styles.container}>
            
            {menuPage && <PageLinks type={"mobile"} sobreRef={sobreRef} staffRef={staffRef} homeRef={homeRef} precarioRef={precarioRef} marcacaoRef={marcacaoRef}/>}
            {menuPage && <IoTriangle className={styles.from}/>}
            <GrMenu className={ !scrolled ? styles.menuIcon: styles.menuIconScrolled} onClick={(e)=>clickHandler(e)}/>
            
            
        </div>
    )
}
export default NavbarMenu