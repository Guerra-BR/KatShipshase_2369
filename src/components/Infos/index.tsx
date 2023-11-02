import { useState } from 'react'
import { Container, Info } from './styles'
import musicImg from '../../assets/images/music-img.jpeg'
import PlayerMain from '../Player'

const Infos = () => {
  const [display, setDisplay] = useState(false)

  function show() {
    setTimeout(() => {
      setDisplay(true)
    }, 17000)

    return true
  }

  return (
    <>
      {show() && (
        <Container translate={`${display ? '0' : '150'}`}>
          <Info>
            <a href="https://www.youtube.com/watch?v=eQBlomFo1Kw">
              <img src={musicImg} />
            </a>
            {/* <PlayerMain /> */}
          </Info>
          <Info></Info>
          <Info></Info>
        </Container>
      )}
    </>
  )
}

export default Infos
