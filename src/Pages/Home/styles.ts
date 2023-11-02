import styled from 'styled-components'
import bg from '../../assets/images/background.svg'

export const Container = styled.main`
  background-color: #585d45;
  height: 100vh;
  display: flex;

  z-index: -2;
  background-attachment: scroll;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transform: scale(1);
  width: 100%;
  background-size: 20px;
  background-position: center;
  background-repeat: repeat;
  background-image: url(${bg});
`
