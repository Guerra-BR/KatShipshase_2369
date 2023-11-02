import { styled } from 'styled-components'

type Props = {
  translate: string
}

export const Container = styled.div<Props>`
  padding: 8px;
  background-color: #84ab72;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  transform: translatey(${(props) => props.translate}%);
  transition: transform 2s;
  display: flex;
  column-gap: 8px;

  .zero {
    transform: translateY(0);
  }

  a {
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    margin: 8px;

    img {
      max-width: 100%;
      transition: transform 0.25s ease, filter 0.25s ease;
      transform: scale(1.1125);
    }

    :hover {
      transform: scale(1);
    }
  }
`

export const Info = styled.div`
  width: 33%;
  background-color: white;
`
