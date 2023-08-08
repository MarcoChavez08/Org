import "./Footer.css"

const Footer = () =>{
    return  <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
    <a href='https://www.linkedin.com/in/marco-antonio-ch%C3%A1vez-l%C3%B3pez-a169a1151/'> 
        <img src="/img/linkedin.png" alt="Linkedin"/>
    </a>
    <a href='https://github.com/MarcoChavez08'> 
        <img src="/img/github.png" alt="github" />
    </a>
    
    </div>
    
    <strong>Desarrollado por Marco Chávez</strong>
</footer>
}

export default Footer