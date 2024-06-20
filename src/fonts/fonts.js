import { createGlobalStyle } from "styled-components";

import Inter from './inter.ttf';

export default createGlobalStyle`
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(${Inter}) format('truetype');
}
`