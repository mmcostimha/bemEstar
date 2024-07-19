
import { GrMenu } from "react-icons/gr";
import styles from "./NavbarMenu.module.css";
import { useState } from "react";
import PageLinks from "./sub-components/PageLinks";

function NavbarMenu({scrolled}){

    const [menuPage,setMenuPage] = useState(false);

    function clickHandler(e){
        e.preventDefault();
        setMenuPage(!menuPage);
        console.log(menuPage);
    }

    return(
        <div className={styles.container}>
            {menuPage && (<PageLinks/>)}
            <GrMenu className={ !scrolled ? styles.menuIcon: styles.menuIconScrolled} onClick={(e)=>clickHandler(e)}/>
            
        </div>
    )
}
export default NavbarMenu