//import modules
import React            from 'react';
import { Link }         from 'react-router-dom';

//import assets
import logoyuukiflix    from '../../assets/yuukiflixlogo2.png';

//import style
import                  './Menu.css';

//import components
import Button           from '../Button';
//import ButtonLink       from './components/ButtonLink';


//-------------------------------------------------
export default function Menu () {
    return(
        <nav className="Menu">
            <Link to="/">                
                <img className="Logo" src={logoyuukiflix} alt="YuukiFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}