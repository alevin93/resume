import streamingsite from '../img/portImages/streamingsite.png'
import resumeimage from '../img/portImages/resume.png'
import videogame from '../img/portImages/videogame.jpg'

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
        id: 2,
        category: 'Game Dev',
        image: videogame,
        link1: '',
        link2: '',
        title: 'Unreal Game',
        text: 'Unfinished Unreal game, I will happily show progress upon request'        
    },
    {
        id: 3,
        category: 'Node.js',
        image: streamingsite,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How to make a website',
        text: 'most versatile language'
    }
]

export default portfolios;
