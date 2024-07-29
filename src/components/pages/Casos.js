import Container from "../layout/Container";
import styles from "./Casos.module.css"
import { useQuery } from "graphql-hooks";
import useWindowSize from "../context/WindowSize";
import { useState } from "react";

function Casos({casosRef}){
    const { width } = useWindowSize();

    const [imgNumber,setImgNumber]=useState(0);

    const Casos = `{
        allCasoClinicos {
            foto {
            url
            }
        }
    }`;
    const { loading, error, data } = useQuery(Casos,{});

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    function nextClick(){
        if(imgNumber === data.allCasoClinicos.lenght)
            setImgNumber(0);
        else
            setImgNumber(imgNumber+1);
    }
    function prevClick(){
        if(imgNumber === data.allCasoClinicos.lenght)
            setImgNumber(0);
        else
            setImgNumber(imgNumber-1);

        {console.log(data.allCasoClinicos.lenght)}
        
    }

    function ListaDeCasos({ casos }) {
        
        if(width > 768){
            return (
                <>
                    {casos.map((caso) => {
                        // Condição para renderizar apenas casos que atendem a um critério e têm índice par
                        return (
                            <div className={styles.casoContainer}>
                                {console.log(data.allCasoClinicos.lenght)}
                                <img src={caso.foto.url} alt="caso-clinico"/>
                            </div>
                        )
                
                    })}
                </>
            );
        }else{
            return (
                <div className={styles.casoContainer}>
                    
                    <div className={styles.buttonContainer} >
                        <button id={styles.left} onClick={()=>nextClick()}> </button>
                        <button id={styles.right} onClick={()=>prevClick()}> </button>
                    </div>
                    <img src={casos[imgNumber].foto.url} alt="caso-clinico"/>
                    
                    
                    
                </div>
            )
        }
        
        
    }

    return(
       <Container referencia={casosRef}>
        <div className={styles.bigContainer}>
            <h1>Casos clínicos</h1>
            <ListaDeCasos casos={data.allCasoClinicos} />
            
           
        </div>
       </Container>
    )
}
export default Casos