import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import Base from "../components/Base";
import BenefitCard from "../components/BenefitCard";
import GlobalStyle from '../globalStyles';
import WaveImg from '../images/wave-haikei.svg'
import AppIcon from '../images/logohoriznew.png'
import TocIcon from '@mui/icons-material/Toc';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CustomButton from '../components/CustomButton'
import PolySvg from '../images/scatter-2.svg'
import PolySvgFilled from '../images/poly-scatter-fill.svg'
import GridSvg from '../images/low-poly-grid-haikei.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import $ from "jquery";




const IndexPage = () => {

  const [mobileLinksVisible, setMobileLinksVisible] = useState(false);

  function toggleMenu() {
    if (!mobileLinksVisible) {
      $('.navbar-links-container').css({ display: 'flex' });
      setMobileLinksVisible(true);
    } else {
      $('.navbar-links-container').css({ display: 'none' });
      setMobileLinksVisible(false);
    }
  }

  return (
    <MainContainer>
      <GlobalStyle />
      <NewNavbar>
        <div className='navbar-logo-container'>
          <img src={AppIcon}></img>
        </div>
        <div className='navbar-toggler-container' onClick={() => toggleMenu()}>
          <MenuIcon style={{ fontSize: '30px', color: '#ffffff' }}></MenuIcon>
        </div>
        <div className='navbar-links-container'>
          <a href="contact.asp">Contact</a>
          <a href="about.asp">Request a demo</a>
        </div>



      </NewNavbar>
      {/* <NavBar>
        <ul>
          <li style={{ float: 'left' }}><a href="default.asp">
            <img src={AppIcon}></img>
          </a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">Request a demo</a></li>
        </ul>
      </NavBar> */}
      <Base />
      <Polygon />

      <BenefitWrapper>

        <BenefitContainer>
          <CenterTextContainer>
            <h1 className='center-header'>We are changing the world of digital documents.</h1>
            <p>Manage your personal collection of digitally signed & verified documents, and share them effortlessly.</p>

          </CenterTextContainer>
          {/* <h1>Why choose us?</h1> */}
          <br />
          <CardContainer>
            <BenefitCard icon={TocIcon} title="Management" text="Securely store and manage your documents on blockchain with our user-friendly platform. Trust us to keep your valuable information safe and transparent."></BenefitCard>
            <BenefitCard icon={FingerprintIcon} title="Digital identity" text="Elevate your digital identity and safeguard your important personal documents with our cutting-edge platform. Store identification documents, licenses, certificates, and tickets all in one secure, tamper-proof location."></BenefitCard>
            <BenefitCard icon={ShieldOutlinedIcon} title="Trust & security" text="Transform the way you conduct business and establish trust online with our advanced document verification system. Verify your documents quickly and securely, without the need for paper, and experience the future of digital business."></BenefitCard>

          </CardContainer>
          <CenterTextContainer>
            {/* <img style={{position: 'absolute', zIndex: "1", left:'5rem', top: '80rem', opacity:'0.1'}} src={PolySvg}/> */}

            <h1 style={{ zIndex: "2" }} className='center-header'>Simple & effective way to prove ownership.</h1>
            <p>Scale your business and establish trust between you and your customers.</p>
            <CustomButton style={{ width: '20rem', marginBottom: '100px' }}>GET IN TOUCH</CustomButton>
          </CenterTextContainer>
          <br></br>
          <br />

        </BenefitContainer>
      </BenefitWrapper>

      <p style={{ marginTop: '50px', paddingLeft: '60px', color: 'white', fontSize: '1.75rem' }}>Contact us:</p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <p style={{ paddingLeft: '60px', color: 'white', fontSize: '1.5rem' }}>
          project.docunique@gmail.com
        </p>
        <a href="https://www.instagram.com/project.docunique/?igshid=YmMyMTA2M2Y%3D">
          <InstagramIcon style={{ fontSize: '50px', paddingLeft: '60px', color: 'white' }} />
        </a>
      </div>

      <br></br>
      <br></br>

      {/* <PolygonsEffectImg style={{}} src={GridSvg} /> */}

      {/* <img src={WaveImg}></img>     */}
    </MainContainer>
  )
}

export default IndexPage

const MailChimp = styled.div`
  #mc_embed_signup{
    background: #fff; 
    clear: left;
    font: 14px Helvetica,Arial,sans-serif;
    width: 600px;
  }
`

const PolygonsEffectImg = styled.img`
  position: absolute;
  z-index: -1;
  left:0;
  top: 0;
  opacity:0.1;
  width: 100vw;
  overflow: hidden;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    width: auto;
  }
`

const CenterTextContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1.center-header{
    text-align: center;
    font-size: 2.75rem;
    font-weight: bold;
    text-color: #003459;
  }
  p{
    font-size: 1.7rem;
    text-align: center;
    text-color: #003459;
  }

  button{
    margin-top: 2rem;
    width: 13rem;
  }
`

const BenefitWrapper = styled.div`
`

const BenefitContainer = styled.div`
  //background: #ffffff;
  display: flex;
  flex-direction: column;
  padding-left: 3.25rem;
  padding-right: 3.25rem;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.52);
  background: url(${PolySvgFilled});

  h1{
    font-size: 3rem;
    font-weight: bold;
    color: #003459;
  }
`

const CardContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`

const MainContainer = styled.main`
  //display: flex;
   //flex-direction: column;
  //flex-wrap: wrap;
  background: url(${GridSvg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 200rem; 
  object-fit: cover;
`

const Polygon = styled.div`
    height: 80px;
    width: 100%;
    clip-path: polygon(28% 0, 0 100%, 100% 100%);
    background-color: #ffffff;

    //box-shadow: 4px 6px 7px rgba(0, 52, 89, 0.81)
`

// const NavBar = styled.div`
// //padding: 20px;
// img{
//   height: 50px;

// }
//   ul {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   }

//   li {
//     float: right;
//   }

//   li a {
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 30px 50px;
//     text-decoration: none;
//     font-size: 1rem;
//   }

//   li a:hover{
//     text-decoration: underline;
//     text-underline-offset: 5px;

//   }

//   /* Change the link color to #111 (black) on hover */
//   /* li a:hover {
//   background-color: #111;
//   } */
// `

const NewNavbar = styled.div`
padding: 20px;
    img{
      height: 4rem;
    }

    a {
     display: block;
      color: white;
     text-align: center;
     text-decoration: none;
     font-size: 1rem;
   }

    a:hover{
     text-decoration: underline;
     text-underline-offset: 5px;

   }
  
  padding-left: 40px;
  padding-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;

  .navbar-links-container{
    display: flex;
    gap: 10rem;
  }

  .navbar-toggler-container{
    display: none;
  }

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 20px;
  padding-right: 20px;

    .navbar-toggler-container{
      display: block;
    }

    .navbar-links-container{
      display: none;
      margin-top: 2rem;
      width: 100%;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      align-content: center;
    }

  }


`

