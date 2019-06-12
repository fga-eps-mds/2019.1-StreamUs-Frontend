import styled from 'styled-components'

export const Containner = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap
`
export const ImageBackground = styled.ImageBackground(({ deviceSize }) => ({
  height: `${deviceSize.deviceHeigth}px`,
  width: `${deviceSize.deviceWidth}px`
}))
