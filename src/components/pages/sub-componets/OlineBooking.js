import style from "./OlineBooking.module.css"
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import emailJs from "@emailjs/browser"


function OlineBooking(){
    
    const [sent, setSent] = useState(false);
    const [name, setName] = useState();
    const [messageError,setMessageError]=useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [date, setDate] = useState();
    const [info,setInfo]= useState(false);
    const [submitTried,setSubmitTried]= useState(false);
    const [privCheck, setPrivCheck]= useState(false);
    
    // function infoClickHandle(e){
    //     e.preventDefault();
    //     setInfo(true);
    //     setTimeout(() => {
    //         setInfo(false);
    //     }, 15000);
    // }

    function checkEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function checkNumber(number) {
        const numberRegex = /^9\d{8}$/;
        return numberRegex.test(number);
    }

    function Submeter(e){
        e.preventDefault();
        setSubmitTried(true);
        const templateParams ={
            name:name,
            number:number,
            date:date,
            email:email
        }
        console.log(name,number,email,date,submitTried);
        //tenho que melhorar esse if
        if(name === undefined || !checkEmail(email)  || !checkNumber(number) || date === undefined || privCheck === false){
            setMessageError("Preencha todos os campos corretamente");
            // Limpa a mensagem de erro após 5 segundos
            setTimeout(() => {
                setMessageError(undefined);
            }, 5000);
        }else{
            emailJs.send(process.env.REACT_APP_SERVECE_ID,process.env.REACT_APP_TEMPLATE_ID,templateParams,process.env.REACT_APP_PUBLIC_KEY)
            .then((response)=>{
                console.log("Email enviado", response.status, response.text);
                setName("");
                setDate("");
                setEmail(""); 
                setNumber("");
                setSent(true);
                setSubmitTried(false);
            }, (err)=> console.log("ERRO", err))
        }
    }

    return(
        <div id={style.onlineBookContainer}>
            <div className={style.titleContainer}>
                <FaCalendarAlt className={style.titleIcon}/>
                <h1>Pedido de Marcação Online</h1>
            </div>
            <div className={style.barContainer}>
                <input type="text" placeholder="Nome" onChange={(e)=> setName(e.target.value)} value={name}/>
            </div>
            
            <div className={style.barContainer}>
                <input className={`${ submitTried ? style.redBorder: console.log("tentando")}`} 
                type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </div>
            <div className={style.barContainer}>
                <input type="tel" placeholder="Telemóvel" onChange={(e)=> setNumber(e.target.value)} value={number}/>
            </div>
            
            <div className={style.dateContainer}>
                <input type="datetime-local" onChange={(e)=> setDate(e.target.value)} value={date} />
            </div>

            <div className={style.checkContainer}>
                
                <label><input type="checkbox" placeholder="Check" onChange={(e)=> setPrivCheck(!privCheck)} value={privCheck} /> </label>
                <p>
                Li e aceito os <a href="">termos e condições</a> e a <a href="">política de privacidade</a>.
                </p>
                
            </div>

            {sent ? (
                <div className={style.textInfoContainer}>
                    <p>Seu pedido foi submetido com sucesso!</p>
                </div>
            ) : (
                <div className={style.barContainer}>
                    <button id={style.botaoSubmicao} onClick={Submeter}>Submeter </button>
                </div>
            )}
            {messageError && (
                <div className={style.errorMessage}>
                {messageError}
                </div>
            )}
            

        </div>
    )
}

export default OlineBooking