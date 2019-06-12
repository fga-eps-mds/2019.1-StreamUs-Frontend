import React from 'react'
import { Logo, ContainnerText, Description } from './styles'
import logoIcon from '../../assets/icon.png'

const TextHome = () => (
  <ContainnerText>
    <Logo source={logoIcon} />
    <Description>
          Uma nova forma de ouvir músicas em grupo.
      {'\n'}
          Crie playlists colaborativas.
      {'\n'}
          Adicione e remova músicas.
      {'\n'}
    </Description>
  </ContainnerText>
)
export default TextHome
