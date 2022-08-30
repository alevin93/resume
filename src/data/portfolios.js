import streamingsite from '../img/portImages/streamingsite.png'
import resumeimage from '../img/portImages/resume.png'
import videogame from '../img/portImages/videogame.jpg'
import fbmaimage from '../img/portImages/fbma.png'

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
        link1: 'https://www.github.com/alevin93/background.show',
        link2: '',
        title: 'Streaming Site',
        text: 'Definitely no copyright infringement here'
    },
    {
        id: 4,
        category: 'Data Science',
        image: fbmaimage,
        link1: 'https://github.com/alevin93/FBMessengerAnalyzer',
        link2: '',
        title: 'FB Messenger Data Analyzer',
        text: 'Python program that analyzes facebook messenger data to show trends and statistics'
    }
]

export default portfolios;
