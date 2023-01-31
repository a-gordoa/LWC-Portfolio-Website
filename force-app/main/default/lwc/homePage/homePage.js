import { LightningElement } from 'lwc';
import MEYAWO from '@salesforce/resourceUrl/meyawo';
import HEADSHOT from '@salesforce/resourceUrl/Anthony';
import LAMPS from '@salesforce/resourceUrl/lamps';
import {loadScipt,loadStyle} from 'lightning/platformResourceLoader';

export default class HomePage extends LightningElement {

    lamps = LAMPS;
    
    headshot = HEADSHOT;

    isLibLoaded = false;

   
    renderedCallback(){
        if (this.isLibLoaded) {
            return;
        } else {
            Promise.all([
                // loadStyle(this,MEYAWO+'/meyawo/meyawo/css/meyawo.min.css')
                loadStyle(this,MEYAWO)
            ])
            .then({
                
            })
            .catch(error=>{
                console.log('error = ' + error);
            })
            this.isLibLoaded = true;
            console.log('Loaded2');
            console.log(this.lamps);    
        }
    }


    
    get lampHeader(){
        //return `background-color:blue;background-image:url(${this.lamps})`
        return `background-color:blue;background-image:url(${LAMPS})`;
        // return 'background-color:blue; background-image:url(`/resource/1672790391000/lamps`);';
    }



}