import React, { useEffect, useState } from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function Repositores() {
  const navigate = useNavigate()
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear()
    } else {
      navigate('/')
    }
  }, [])
  return (
    <S.container>
      <S.title>Repositorios</S.title>
      <S.list>
        {repositories.map(repository => {
          return <S.listItem> Repositorio: {repository}</S.listItem>
        })}
      </S.list>
      <S.NavLinkHome to="/">Voltar</S.NavLinkHome>
    </S.container>
  )
}
