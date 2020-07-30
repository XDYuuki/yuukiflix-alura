import React/*, { useState }*/ from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  //const [value, setValue] = useState('');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>          
          <input
            type="text"
            //value={value}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;