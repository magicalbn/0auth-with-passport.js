/* import {ReactComponent as  facebook} from '../assets/logos/facebook-f-brands.svg';
import twitter from '../assets/logos/twitter-brands.svg';
import github from '../assets/logos/github-brands.svg';
import google from '../assets/logos/google-brands.svg'; */

const authType = [
    {
        id: 1,
        provider: "facebook",
        logo: 'static/facebook-f-brands.svg',
        link: 'auth/facebook'
    },
    {
        id: 2,
        provider: "google",
        logo: 'static/google-brands.svg',
        link: 'auth/google'
    },
    {
        id: 3,
        provider: "twitter",
        logo: 'static/twitter-brands.svg',
        link: 'auth/twitter'
    },
    {
        id: 4,
        provider: "github",
        logo: 'static/github-brands.svg',
        link: 'auth/github'
    }
    ,
    {
        id: 5,
        provider: "saml",
        logo: 'static/github-brands.svg',
        link: 'auth/sso'
    }
]

export default authType