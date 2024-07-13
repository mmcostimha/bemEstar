import { useScroll } from "../context/ScrollContext";
import styles from "./Home.module.css"
import Sobre from "./Sobre"
import Staff from "./Staff"
import Precario from "./Precario";
import { useQuery } from "graphql-hooks";

function Home({sobreRef,staffRef,precarioRef}){
    const ref = useScroll();
    function scrollTo(){
        ref.scrollToSection?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const homePage = `{
        homePage {
            title
            homePageImg {
                url
            }
        }
      }`;
    
    const { loading, error, data } = useQuery(homePage,{});
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";
    var url=data.homePage.homePageImg.url;

    return(
        <div className={styles.home_container} onLoad={()=>scrollTo()}>
            <div style={{ backgroundImage: `url(${url})`}} className={styles.home_home_container} >
                <h1 className={styles.frase}>{data.homePage.title}</h1>
                <p>Isto vai ser um botão para a marcação</p>{console.log(url)}
            </div>
            <Sobre sobreRef={sobreRef}/>
            <Staff staffRef={staffRef}/>
            <Precario precarioRef={precarioRef}/>
        </div>
    )
}
export default Home