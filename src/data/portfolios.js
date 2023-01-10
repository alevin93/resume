import streamingsite from '../img/portImages/streamingsite.png'
import resumeimage from '../img/portImages/resume.png'
import discjs from '../img/portImages/discordjs.jpg'
import trivly from '../img/portImages/trivly.png'

const portfolios = [
    {
        id: 1,
        category: 'React',
        image: resumeimage,
        link1: 'https://github.com/alevin93/resume',
        link2: '',
        title: 'My resume website',
        text: 'Using React to make a pretty website'
    },
    {
        id:2,
        category: 'React',
        category: 'Node',
        category: 'MongoDB',
        image: trivly,
        link1: 'https://github.com/alevin93/trivly-backend',
        link2: 'https://github.com/alevin93/trivly-frontend',
        title: 'Trivly (In Progress)',
        text: 'Daily trivia site with user created and subscribed to categories ala Wordle'
    },
    {
        id: 3,
        category: 'Node.js',
        image: streamingsite,
        link1: 'https://www.github.com/alevin93/background.show',
        link2: '',
        title: 'Streaming Site (for Personal Use)',
        text: 'Definitely no copyright infringement here'
    },
    {
        id: 4,
        category: 'Node.js',
        image: discjs,
        link1: 'https://github.com/nman1444/FloppaBot',
        link2: '',
        title: 'Discord Bot for Game Info (Arma 3)',
        text: 'Bot that has useful tools and relays game info'

    }
]

export default portfolios;
