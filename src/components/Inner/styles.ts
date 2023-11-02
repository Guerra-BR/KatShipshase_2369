import styled from 'styled-components'

export const Card = styled.div`
  margin: auto;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  max-width: 720px;
  max-height: 420px;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  .up {
    transition: transform 2s ease-in-out;
    transform: translateY(-150%);
    overflow-x: hidden;
  }
`

export const SearchText = styled.div`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  p {
    padding: 8px;
    overflow: hidden;
  }
`
