import streamingsite from '../img/portImages/streamingsite.png'
import resumeimage from '../img/portImages/resume.png'
import discjs from '../img/portImages/discordjs.jpg'

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
