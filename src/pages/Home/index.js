import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

function App() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)
  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.map(repository => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        )
        setErro(false)
        navigate('../pages/repositories')
      })
      .catch(err => {
        setErro(true)
      })
  }
  return (
    <S.HomeContainer>
      <S.content>
        <S.input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <S.button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.button>
      </S.content>
      {erro ? <S.ErrorMsg>Usuário não encontrado</S.ErrorMsg> : ''}
    </S.HomeContainer>
  )
}

export default App
