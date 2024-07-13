import style from "./Location.module.css"
import Mapa from "./GoogleMaps"
function Location(){
    return(
        <div id={style.locationContainer}>
            <div id={style.mapContainer}><Mapa/></div>
        </div>
    )
}
export default Location