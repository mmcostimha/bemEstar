import Container from "../layout/Container";
import styles from "./Precario.module.css"

function Precario({precarioRef}){
    return(
       <Container referencia={precarioRef}>
        <div className={`${styles.precarioContainer} ${styles.left}`}>
            <p>

            </p>
        </div>
        <div className={`${styles.precarioContainer} ${styles.right}`}>
            <p>
                
            </p>
        </div>
       </Container>
    )
}
export default Precario