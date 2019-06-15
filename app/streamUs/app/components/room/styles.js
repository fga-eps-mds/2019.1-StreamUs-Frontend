import {Container as ContainerNativeBase} from 'native-base'
import styled from 'styled-components'

export const Containner = styled(ContainerNativeBase)`
  heigth: screenHeigth,
  flex: 1,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: '#191414'
`

export const List = styled.List`
  width: screenWidth/2,
`

export const Button = styled.Button`
  backgroundColor: '#1DB954',
  padding: '10%',
  alignSelf: 'center',
  height: '30pt'
`

export const Text = styled.Text`
  color: 'white'
`

export const TextButton = styled.Text`
  color: 'white',
  fontSize: '12pt',
`

export const ExcluirSala = styled.View`
  flexDirection: 'row',
  marginTop: '2%',
  justifyContent: 'center'
`

export const ListItem = styled.Button`
  flex: 1,
  height: '10pt',
  backgroundColor: 'transparent',
  justifyContent: 'center'
`

export const TextNomeSala = styled.Text`
  color: 'white',
  fontSize: '14pt'
`

export const TextListItem = styled.Text`
  color: '#1DB954',
  fontSize: '14pt'
`
