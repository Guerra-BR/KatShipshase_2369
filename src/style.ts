import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Barlow', sans-serif;
  }

  #tsparticles {
    position: fixed;
  }

  .hidden {
    display: none;
  }
`
