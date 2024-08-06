import {FaInstagram, FaWhatsapp}from "react-icons/fa";
import styles from "./Footer.module.css"
import { useQuery } from "graphql-hooks";

function Footer(){

    const dataInfo = `{
        dataInfo {
            instagram
            telefone
            telemVel
            facebook
            email
        }
      }`;
    
    const { loading, error, data } = useQuery(dataInfo,{});
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    function clickHandler(e,text){
        e.preventDefault();
        console.log(text);
        navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado para a área de transferência!');
        }).catch(err => {
        console.error('Falha ao copiar o texto: ', err);
        });
    }

    return(
        <footer>
            <ul className={styles.social_list}>
                <li className={styles.social_iteam }><FaInstagram/></li>
                <li className={styles.social_iteam}><FaWhatsapp/></li>
                <li className={styles.social_iteam} onClick={(e)=>(clickHandler(e,data.dataInfo.telefone))}><p>Telefone: {data.dataInfo.telefone}  </p></li>
                <li className={styles.social_iteam}  onClick={(e)=>(clickHandler(e,data.dataInfo.telemVel))} ><p>Telemóvel: {data.dataInfo.telemVel} </p></li>
                <li className={styles.social_iteam}  onClick={(e)=>(clickHandler(e,data.dataInfo.email))}><p>mail: {data.dataInfo.email} </p></li>
            </ul>
        </footer>
       
    )
}
export default Footer