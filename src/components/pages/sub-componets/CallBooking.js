import style from "./CallBooking.module.css"
import { BsFillTelephoneFill } from "react-icons/bs";

function CallBooking(){
    return(
        <div id={style.callBookContainer}>
            <div className={style.titleContainer}>
                <BsFillTelephoneFill className={style.titleIcon}/>
                <h1>Marcação por telefone</h1>
                <BsFillTelephoneFill className={style.fakeicon}/>
            </div>
            
            <ul>
                <li><h2> Rede fixa nacional</h2></li>
                <li><p>218 000 000</p></li>
                <li><h2> Rede móvel nacional</h2></li>
                <li><p>927 777 777</p></li>
            </ul>
        </div>
    )
}
export default CallBooking