import {FaInstagram, FaWhatsapp}from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer>
            <ul className={styles.social_list}>
                <li className={styles.social_iteam}><FaInstagram/></li>
                <li className={styles.social_iteam}><FaWhatsapp/></li>
                <li className={styles.social_iteam}><p>Telefone: 927777777 </p></li>

            </ul>
        </footer>
       
    )
}
export default Footer