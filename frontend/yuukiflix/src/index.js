import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

//Route Pages
import Home from './pages/home';

function CadastroVideo (){
  return(
    <div>
      <h1>Cadastro de Vídeo</h1>
    </div>
  )
}

function CadastroCategoria (){
  return(
    <div>
      <h1>Cadastro de Categoria</h1>
    </div>
  )
}

const Pagina404 = ()=> (<div><h1>Página404</h1></div>);

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

// <React.StrictMode>
// <App />
// </React.StrictMode>,

