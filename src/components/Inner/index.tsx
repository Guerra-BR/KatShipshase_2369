import { useTypewriter } from 'react-simple-typewriter'
import { Card, SearchText } from './styles'
import { useState } from 'react'
import Infos from '../Infos'

const Inner = () => {
  const [display, setDisplay] = useState(false)
  const [hidde, setHidde] = useState(false)

  const [text] = useTypewriter({
    words: ['...'],
    loop: 3,
    typeSpeed: 500,
    deleteSpeed: 0,
    delaySpeed: 400
  })

  const [textfound] = useTypewriter({
    words: ['', 'ONE (1) RESULT FOUND'],
    typeSpeed: 50,
    deleteSpeed: 0,
    delaySpeed: 2500
  })

  const [loadingtext] = useTypewriter({
    words: ['', 'Loading Site...'],
    typeSpeed: 50,
    deleteSpeed: 0,
    delaySpeed: 2600
  })

  function show() {
    setTimeout(() => {
      setDisplay(true)
    }, 15000)
    setTimeout(() => {
      setHidde(true)
    }, 17000)

    return true
  }

  return (
    <Card>
      {show() && (
        <>
          <SearchText className={`${display && 'up'} ${hidde && 'hidden'}`}>
            <p>
              🔍Searching 🦋@Kat_Ship2369<span>{text}</span>
              <span> {textfound}</span>
            </p>
            <p>{loadingtext}</p>
          </SearchText>
          <Infos />
        </>
      )}
    </Card>
  )
}

export default Inner
