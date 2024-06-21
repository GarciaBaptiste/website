import { createGlobalStyle } from 'styled-components';

import Inter from './inter.ttf';
import JetBrains from './jetbrains.ttf';

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(${Inter}) format('truetype');
}
@font-face {
  font-family: 'JetBrains';
  src: local('JetBrains Mono Regular'), url(${JetBrains}) format('truetype');
}
`

export default GlobalFonts