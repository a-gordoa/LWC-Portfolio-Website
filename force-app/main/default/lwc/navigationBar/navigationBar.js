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

    nav_github() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://github.com/a-gordoa'
            }
        },
        false // Replaces the current page in your browser history with the URL
      );
    }

    nav_linkedin() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.linkedin.com/in/gordoa/'
            }
        },
        false // Replaces the current page in your browser history with the URL
      );
    }

    nav_trailhead() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://trailblazer.me/id/gordoa'
            }
        },
        false // Replaces the current page in your browser history with the URL
      );
    }


}