import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from "../layout/Container"
import style from "./Marcacao.module.css"
import OnlineBooking from "./sub-componets/OlineBooking"
import CallBooking from "./sub-componets/CallBooking"
import Location from "./sub-componets/Location"

function Marcacao({marcacaoRef}){

    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };
    return(
        
        <Container referencia ={marcacaoRef}>
            <ScrollToTop/>
            <div className={style.container_marc} >
                <OnlineBooking/>
                <CallBooking/>
                <Location/>
            </div>
        </Container>
    )
}
export default Marcacao