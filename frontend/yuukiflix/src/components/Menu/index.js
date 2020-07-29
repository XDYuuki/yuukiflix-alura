import React            from 'react';
import logoyuukiflix    from '../../assets/yuukiflixlogo2.png';
//import ButtonLink       from './components/ButtonLink';
import                  './Menu.css';
import Button           from '../Button';

export default function Menu () {
    return(
        <nav className="Menu">
            <a href="/">                
                <img className="Logo" src={logoyuukiflix} alt="YuukiFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}