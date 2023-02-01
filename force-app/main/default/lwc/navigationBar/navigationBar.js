import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationBar extends NavigationMixin(LightningElement) {

    nav_home() {
        this[NavigationMixin.Navigate](
             {
             type: 'comm__namedPage',
             attributes: {
                 name: 'Home'
             }
         });
     }

     nav_resume() {
       this[NavigationMixin.Navigate](
            {
            type: 'comm__namedPage',
            attributes: {
                name: 'resume__c'
            }
        });
    }


}