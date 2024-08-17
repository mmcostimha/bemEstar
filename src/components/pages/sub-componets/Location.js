import style from "./Location.module.css"
function Location(){
    return(
        
        <div className={style.locationContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d654.0058626414308!2d-9.180291283315134!3d38.763848495783215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQ1JzQ5LjkiTiA5wrAxMCc0Ny4zIlc!5e0!3m2!1spt-PT!2spt!4v1723887399625!5m2!1spt-PT!2spt" className={style.mapContainer} ></iframe>
        </div>
    )
}
export default Location