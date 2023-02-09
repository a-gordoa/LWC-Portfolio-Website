import { LightningElement } from 'lwc';
import SPOTIFYLOGO from '@salesforce/resourceUrl/SpotifyLogo'
import TO_DO_IMAGE from '@salesforce/resourceUrl/ToDoImage'
import { NavigationMixin } from 'lightning/navigation';

export default class ProjectTiles extends NavigationMixin(LightningElement) {
//spotifyLogo = SPOTIFYLOGO;

projectList = [
    {
        displayName:'Spotify Playlist App',
        description:'This component uses the Spotify API to allow users to create and edit Spotfy Playlists directly within the component. This is achieved using HTTP Callouts to Spotify’s API which returns search results from Spotify’s database to a datatable within the component. Once a user selects that songs from the search results, those selections are sent back to Spotify and stored in the playlist that the user created.',
        image: `${SPOTIFYLOGO}`,
        githubLink: 'https://github.com/a-gordoa/Spotify-LWC-Project',
        techList: [{item1: '@wire', item2:'Javascript'}],
        navName: 'Spotify'

    },
    {
        displayName:'To Do List',
        description:'This component uses a drag and drop interface similar to a Kanban system to organize a to-do list created by the user. The to-do\'s are stored in a custom object called To Do Item which has fields to store the subject, due date, priority and notes.',
        image: `${TO_DO_IMAGE}`,
        githubLink: 'https://github.com/a-gordoa/Spotify-LWC-Project',
        techList: [{item1: '@wire2', item2:'Javascript2'}],
        navName: 'ToDoList'
    }
]

    handleProjectNavigation(event) {

        let navAPI_Name = null;

        // event.currentTarget.dataset.id comes from the data-id componenet that set on the Tile div. 
        // That value is set to the navName value in each object in projectList. 
        switch (event.currentTarget.dataset.id) {
            case 'Spotify':
                navAPI_Name = 'Spotify_Component__c';
                break;

            case 'ToDoList':
                navAPI_Name = 'To_Do_List__c';
                break;
            
            default:
                navAPI_Name = 'Home';
                break;
        }
            
        console.log('DIV CLICK WORKED')
        this[NavigationMixin.Navigate](
            {
            type: 'comm__namedPage',
            attributes: {
                name: navAPI_Name
            }
        });
    }

}