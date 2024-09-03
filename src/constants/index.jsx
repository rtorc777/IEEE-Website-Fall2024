const TEMP = "test"
import { FaXTwitter } from "react-icons/fa6"
import { FaDiscord, FaInstagram} from "react-icons/fa"

import paintball from "../assets/paintball.jpg"
import gm from "../assets/gm.png"
import workshop from "../assets/workshop.jpg"

import craig from "../assets/eboard/craig.png"
import dom from "../assets/eboard/dom.jpg"
import matt from "../assets/eboard/matt.jpg"
import chelsea from "../assets/eboard/chelsea.jpg"
import elise from "../assets/eboard/elise.jpg"
import aidan from "../assets/eboard/aidan.jpg"
import henry from "../assets/eboard/henry.jpg"
import john from "../assets/eboard/john.jpeg"
import elizabeth from "../assets/eboard/elizabeth.jpg"
import rico from "../assets/eboard/rico.jpg"
import franklin from "../assets/eboard/franklin.png"
import kevin from "../assets/eboard/kevin.jpg"

export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://discord.com/invite/ZesVYMSJWe",
      icon: <FaDiscord fontSize={30} className="hover:opacity-80 transition ease-in-out hover:-translate-y-1 duration-300" target="_blank" />,
    },
  
    {
      href: "https://www.instagram.com/rowanieee/",
      icon: <FaInstagram fontSize={30} className="hover:opacity-80 transition ease-in-out hover:-translate-y-1 duration-300" target="_blank" />,
    },
    {
      href: "https://twitter.com/RowanIEEE",
      icon: <FaXTwitter fontSize={30} className="hover:opacity-80 transition ease-in-out hover:-translate-y-1 duration-300" target="_blank" />,
    },
  ];

export const LINKS = [
    { text: "About Us", targetId: "about" },
    { text: "Events", targetId: "events" },
    { text: "ProfHacks", targetId: "profhacks" },
    { text: "E-board", targetId: "eboard" },
    { text: "Photos", targetId: "photos" },
    { text: "Contact", targetId: "contact" },
];

export const PROFHACKS = {
    header: "What is Profhacks?",
    content: `Profhacks is our largest annual event! It is a 24-hour Hackathon where you can create innovative hardware and software solutions to solve real world problems. Go solo or with a team and follow the theme, or just build whatever your heart desires! There are a variety of different activities you can do including:
        
        - 3D Printing
        - Programming
        - Playing Games
        - Attending Workshops
        - Getting Free Merch
        - Winning Prizes
        - HAVING FUN!!!
        
Last event was ProfHacks 2024, which was the 9th iteration of our annual hackathon. The theme of the hackathon was "Island Hack", which had a series of island themed events and activities involved with it.`

}
export const ABOUT = {
    header: "So, what is IEEE?", 
    content: `IEEE, pronounced “Eye-triple-E”, stands for the Institute of Electrical and Electronics Engineers.
            
Globally, IEEE is an association dedicated to advancing innovation and technological excellence for the benefit of humanity. It is the world’s largest technical professional society and is designed to serve professionals involved in all aspects of the electrical, electronic and computing fields and related areas of science and technology that underlie modern civilization.
    
Rowan IEEE's Student Branch is a University club, much like any other. Our branch is apart of IEEE Region 2. Students of all majors who want a fun, relaxed place to improve themselves professionally and technically are welcome!`
};

export const EVENTS = [
    {
        image: gm,
        title: "General Meetings",
        description: "General meetings are held bi-weekly on Fridays at 2PM in the Engineering 321. Typically, we will talk about upcoming events followed by a small presentation, seminar, or guest speaker. Pizza and drinks are provided!"
    },
    {
        image: paintball,
        title: "Social Activities",
        description: "It's always nice to have some fun, so we host many different activities avaliable to all of our members free of charge! Some of our previous activities include paintball, TopGolf, trampoline parks, and many others."
    },
    {
        image: workshop,
        title: "Technical Workshops",
        description: "To engage our members, we like to hold workshops to help you expand on your technical knowledge! Some of our previous workshops include Resume building, Git, Verilog, Arduino, PCB design, and many others."
    }
]

export const EBOARD = [
    {
        image: craig,
        name: "Craig Droke",
        position: "Chair",
        contact: "drokec87@students.rowan.edu"
    },
    {
        image: dom,
        name: "Dom Ficarra",
        position: "Vice Chair",
        contact: "ficarr85@students.rowan.edu"
    },
    {
        image: matt,
        name: "Matt Burney",
        position: "Treasurer",
        contact: "mcburn92@students.rowan.edu"
    },
    {
        image: chelsea,
        name: "Chelsea Small",
        position: "Secretary",
        contact: "smallc17@students.rowan.edu"
    },
    {
        image: elise,
        name: "Elise Heim",
        position: "Activities Chair",
        contact: "heimel27@students.rowan.edu"
    },
    {
        image: aidan,
        name: "Aidan Sharpe",
        position: "Workshop Chair",
        contact: "sharpe23@students.rowan.edu"
    },
    {
        image: henry,
        name: "Henry Conde",
        position: "Tournaments Chair",
        contact: "condeh59@students.rowan.edu"
    },
    {
        image: john,
        name: "John Schiede",
        position: "Service Chair",
        contact: "schied13@students.rowan.edu"
    },
    {
        image: elizabeth,
        name: "Elisabeth Yap",
        position: "PR Chair",
        contact: "yapeli32@students.rowan.edu"
    },
    {
        image: rico,
        name: "Rico Torculas",
        position: "Webmaster",
        contact: "torcul85@students.rowan.edu"
    },
    {
        image: franklin,
        name: "Franklin Tejada",
        position: "SGA Representative",
        contact: "torcul85@students.rowan.edu"
    },
    {
        image: kevin,
        name: "Kevin Hack",
        position: "Chancellor of ProfHacks",
        contact: "hackke83@students.rowan.edu"
    }
]