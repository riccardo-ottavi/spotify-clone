import { Link } from "react-router-dom";


export default function AboutPage(){
    return(
        <div className="about-page">
            <header>
                
                <Link to={"/"}><h2>Logo Spotify</h2> </Link>
                <nav>
                    <ul>
                        <li><a href="">Piani Premium</a></li>
                        <li><a href="">Assistenza</a></li>
                        <li><a href="">Scarica</a></li>
                        <li><h2>Icona Profilo</h2> </li>
                    </ul>
                    
                </nav>

               
                
            </header>
            <div className="about-content">
                <h2>Chi Sono</h2>
            </div>

        
        </div>
        
    )
}