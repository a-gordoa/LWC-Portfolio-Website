import { LightningElement } from 'lwc';
import SPOTIFYLOGO from '@salesforce/resourceUrl/SpotifyLogo'
import TO_DO_IMAGE from '@salesforce/resourceUrl/ToDoImage'

export default class ProjectTiles extends LightningElement {
//spotifyLogo = SPOTIFYLOGO;

projectList = [
    {
        name:'Spotify Playlist App',
        description:'This component uses the Spotify API to allow users to create and edit Spotfy Playlists directly within the component',
        image: `${SPOTIFYLOGO}`,
        githubLink: 'https://github.com/a-gordoa/Spotify-LWC-Project',
        techList: ['@wire', 'javascript',]

    },
    {
        name:'To Do List',
        description:'This is a description for the To Do app that I haven\'t build',
        image: `${TO_DO_IMAGE}`,
        githubLink: 'https://github.com/a-gordoa/Spotify-LWC-Project',
        techList: ['@wire', ]
    }
    // ,
    // {
    //     name:'One last project',
    //     description:'This is a description for the To Do app that I haven\'t build',
    //     image: `${SPOTIFYLOGO}`,
    //     githubLink: 'https://github.com/a-gordoa/Spotify-LWC-Project',
    //     techList: ['@wire', ]
    // }
]

}