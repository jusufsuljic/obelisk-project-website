import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
        font-family: "Montserrat";
    }
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #003459 12.5%, rgba(0, 52, 89, 0.7) 38.15%);
  }

  html{
        font-size: 16px;
        scroll-behavior: smooth;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        html{
            font-size: 10px;
        }

    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        html{
            font-size: 10px;
        }

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        html{
            font-size: 12px;
        }

    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        html{
            font-size: 14px;
        }

    }


    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        html{
            font-size: 16px;
        }

    }

    @media only screen and (min-width: 1500px) {
        html{
            font-size: 20px;
        }

    }
`;

export default GlobalStyle;