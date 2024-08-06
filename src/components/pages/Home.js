import { useScroll } from "../context/ScrollContext";
import styles from "./Home.module.css"
import Sobre from "./Sobre"
import Staff from "./Staff"
import Casos from "./Casos";
import useWindowSize from "../context/WindowSize";
import { useQuery } from "graphql-hooks";

function Home({sobreRef,staffRef,casosRef}){
    const ref = useScroll();
    const { width } = useWindowSize();

    function scrollTo(){
        ref.scrollToSection?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const homePage = `{
        homePage {
            homePageImg {
            url
            }
            title
            homePageImgSmall {
            url
            }
        }
      }`;
    
    const { loading, error, data } = useQuery(homePage,{});
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    if(width<=1024){
        var url=data.homePage.homePageImgSmall.url;
    }else{
        var url=data.homePage.homePageImg.url;
    }
    
    

    return(
        <div className={styles.home_container} onLoad={()=>scrollTo()}>
            <div style={{ backgroundImage: `url(${url})`}} className={styles.home_home_container} >
                <h1 className={styles.frase}>{data.homePage.title}</h1>
            </div>
            <Sobre sobreRef={sobreRef}/>
            <Staff staffRef={staffRef}/>
            <Casos casosRef={casosRef}/>
        </div>
    )
}
export default Home