import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function App(props) {
  const history = useNavigate();
  const [usuario, setUsuario] = useState('')

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history('/repositories');
    });
  }

  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="S.Button" onClick={handleSearch}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
