import Container from "../layout/Container"
import style from "./Staff.module.css"
import { useQuery } from "graphql-hooks";

function Staff({staffRef}){

    const allFuncionarios = `{
        allFuncionarios {
          nome
          descrition
          foto {
            url
          }
        }
      }`;
      const { loading, error, data } = useQuery(allFuncionarios,{});
    
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    
      
    
    function ListaDeItens({ itens }) {
        return (
            <>
                {itens.map((item, index) => {
                    // Condição para renderizar apenas itens que atendem a um critério e têm índice par
                    if (index % 2 === 0) {
                        return (
                            <div key={index} className={style.person_container_left}>
                                <img src={item.foto.url} alt="employee"/>
                                
                                <div className={`${style.info}`}>
                                    <h2 >{item.nome}</h2>
                                    <p >{item.descrition}</p>
                                </div>
                            </div> 
                        )
                    }
                    return (
                        <div className={style.person_container_right}>
                            <img src={item.foto.url} alt="employee"/>
                            
                            <div className={style.info}>
                                <h2 >{item.nome}</h2>
                                <p >{item.descrition}</p>
                            </div>
                        </div> 
                    ); // Não renderiza nada se a condição não for atendida
                })}
            </>
        );
    }

    return(
        <Container referencia={staffRef}>
            <div className={style.container}>
                <h1>Proficionais</h1>
                <ListaDeItens itens={data.allFuncionarios}/>
            </div>                    
        </Container>
    )
}
export default Staff