import img1 from "../../images/employer.png"
import img2 from "../../images/build.png"
import img3 from "../../images/porfolio.JPG"

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Portfolios',
    headline: 'Land your first job with our portfolio maker',
    description:
      'Get access to our exclusive builder and create a portfolio that will guarantee to make your employers head turn.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: img1,
    alt: 'Employer',
    dark: true,
    primary: true,
    darkText: false
  };
  
  export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description:
      'We have you covered. Build a portfolio with your desired info.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: img2,
    alt: 'Build',
    dark: false,
    primary: false,
    darkText: true
  };
  
  export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Build with us',
    headline: 'Creating an account is extremely easy',
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: img3,
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true
  };
  