import { createGlobalStyle } from 'styled-components';

import InterRegular from './Inter-Regular.ttf';
import InterMedium from './Inter-Medium.ttf';
import InterLight from './Inter-Light.ttf';
import JetBrains from './jetbrains.ttf';

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  src: local('Inter-Light'), url(${InterLight}) format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'Inter';
  src: local('Inter-Regular'), url(${InterRegular}) format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Inter';
  src: local('Inter-Medium'), url(${InterMedium}) format('truetype');
  font-weight: 500;
}
@font-face {
  font-family: 'JetBrains';
  src: local('JetBrains Mono Regular'), url(${JetBrains}) format('truetype');
}
`

export default GlobalFonts