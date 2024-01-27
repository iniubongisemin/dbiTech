// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si';

// data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'web development',
                icons: [
                    <FaHtml5 key={html}/>,
                    <FaCss3 key={css}/>,
                    <FaJs key={js}/>,
                    <FaReact key={react}/>,
                    <SiNextdotjs key={nextjs}/>,
                    <SiFramer key={framer}/>,
                    <FaWordpress key={wp}/>,
                ],
            },  
            {
                title: 'UI/UX Design',
                icons: [<FaFigma key={figma}/>, <SiAdobexd key={xd}/>, <SiAdobephotoshop key={ps}/>],
            },
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                year: '2021 - 2022'
            }, 
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                year: '2022 - 2023',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Frontend Developer',
                year: 'Jan - March 2024 ',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Backend Web Development Certification - Univelcity',
                year: 'Feb 2024'
            },
            {
                title: 'Product Design Certification - Univelcity',
                year: 'May 2024'
            },
            {
                title: 'Frontend Web Development Certification - Univelcity',
                year: 'November 2023'
            },
            {
                title: 'B.Eng (Hons) Agricultural Engineering',
                year: '2021',
            },
            {
                title: ''
            }
        ],
    },
];

const About = () => {
    return (
        <div>
            About
        </div>
    )
}

export default About;