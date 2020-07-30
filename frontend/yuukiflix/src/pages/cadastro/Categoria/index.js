import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {

  const [categoriaList, setCategoriaList] = useState(['item inicial'])
  const [categoria, setCategoria] = useState('');
  //console.log('Valor Digitado: ', value);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit = {function handleChangeFunction  (infoEvent){

        infoEvent.preventDefault();
        setCategoriaList([...categoriaList, categoria]);
      }}>

        <label>          
          <input
            type="text"
            onChange={function handleChangeFunction  (eventValue){  

              setCategoria(eventValue.target.value);                 
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categoriaList.map((item, index) => {
            return(
              <li key={item+index}>
                {item}
              </li>
            );
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;