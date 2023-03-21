import { LightningElement } from 'lwc';

export default class Getter extends LightningElement {

    language='jasscript'
    handleLanguage(event){
        this.language=event.target.value
    }

    days=5
    handleDays(event){
      this.days=event.target.value
    }

    get createSentence(){
        return `${this.language.toUpperCase()} lecture will be covered in ${this.days} days`
    }
}