import Container from "../layout/Container"
import style from "./Sobre.module.css"
import { useQuery } from "graphql-hooks";

function Sobre({sobreRef}){
    
    const sobrePage = `{
        sobrePage {
            sobrePageImg {
            url
            }
            description
            title
        }
      }`;
      const { loading, error, data } = useQuery(sobrePage,{});
    
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    
    return(
        <Container referencia={sobreRef}>
            <div  className={style.container}>
                <img className={style.img} src={data.sobrePage.sobrePageImg.url} alt="sobre"/>
                <div className={style.info}>
                    <h2>{data.sobrePage.title}</h2>
                    <p>{data.sobrePage.description}</p>
                </div>
                
            </div>                    
        </Container>
       
    )
}
export default Sobre