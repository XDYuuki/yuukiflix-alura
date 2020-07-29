//import modules
import React    from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

//import styles
import './index.css';

//Route Pages
import Home               from './pages/home';
import CadastroVideo      from './pages/cadastro/video';
import CadastroCategoria  from './pages/cadastro/Categoria';


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

