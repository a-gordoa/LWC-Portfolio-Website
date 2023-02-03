import { LightningElement } from 'lwc';
import MEYAWO from '@salesforce/resourceUrl/meyawo';
import HEADSHOT from '@salesforce/resourceUrl/Anthony';
import LAMPS from '@salesforce/resourceUrl/lamps';
//import {loadScipt,loadStyle} from 'lightning/platformResourceLoader';

export default class HomePage extends LightningElement {

    lamps = LAMPS;
    
    headshot = HEADSHOT;

    isLibLoaded = false;

   
    // renderedCallback(){
    //     if (this.isLibLoaded) {
    //         return;
    //     } else {
    //         Promise.all([
    //             // loadStyle(this,MEYAWO+'/meyawo/meyawo/css/meyawo.min.css')
    //             loadStyle(this,MEYAWO)
    //         ])
    //         .then({
                
    //         })
    //         .catch(error=>{
    //             console.log('error = ' + error);
    //         })
    //         this.isLibLoaded = true;
    //         console.log('Loaded2');
    //         console.log(this.lamps);    
    //     }
    // }


    
    get lampHeader(){
        //return `background-color:blue;background-image:url(${this.lamps})`
        return `background-color:blue;background-image:url(${LAMPS})`;
        // return 'background-color:blue; background-image:url(`/resource/1672790391000/lamps`);';
    }

    handleTabbing (event) {

        // selects old tab and removes the active class from it
        var oldTab = this.template.querySelector(".slds-is-active").classList.remove("slds-is-active");
    
        // selects new tab to add the active class to 
        var newTab = event.target.parentElement;
        newTab.classList.add("slds-is-active");
        //console.log('Tab title = ' + newTab.title);

    
        // handles adding and removing the slds-show class that adds the content to the tabs
        this.toggleShowHide(newTab);
    }

    toggleShowHide(newTab) {
        console.log('got to toggleSwitch');
        // const tab1 = this.template.querySelector(".tab-default-1");
        // const tab2 = this.template.querySelector(".tab-default-2");
        // const tab3 = this.template.querySelector(".tab-default-3");

        const tab1 = this.template.querySelector('[data-id="tab-default-1"]');
        const tab2 = this.template.querySelector('[data-id="tab-default-2"]');
        const tab3 = this.template.querySelector('[data-id="tab-default-3"]');

        console.log('Class List for Tab 1 = ' + tab1.classList)
        console.log('Class List for Tab 2 = ' + tab2.classList)
        console.log('Class List for Tab 3 = ' + tab3.classList)


        console.log('TESTER = ' + tab1.dataset.id);

    
    
        console.log('newTab id  ' + newTab.dataset.id );

        switch(newTab.dataset.id) {
            case "Item1":
                tab1.classList.add("slds-show");
                tab1.classList.remove("slds-hide");
    
                tab2.classList.remove("slds-show");
                tab2.classList.add("slds-hide");
                
                tab3.classList.remove("slds-show");
                tab3.classList.add("slds-hide");
                break;

            case "Item2":
                tab1.classList.remove("slds-show");
                tab1.classList.add("slds-hide");
    
                tab2.classList.add("slds-show");
                tab2.classList.remove("slds-hide");
                
                tab3.classList.remove("slds-show");
                tab3.classList.add("slds-hide");
                
                break;
    
            case "Item3":
                tab1.classList.remove("slds-show");
                tab1.classList.add("slds-hide");
    
                tab2.classList.remove("slds-show");
                tab2.classList.add("slds-hide");
                
                tab3.classList.add("slds-show");
                tab3.classList.remove("slds-hide");
                break;  
    
            default:
              // code block
          } 
    
        
    }


}