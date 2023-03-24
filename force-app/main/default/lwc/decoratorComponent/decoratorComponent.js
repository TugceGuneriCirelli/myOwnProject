import { LightningElement, track } from 'lwc';

export default class DecoratorComponent extends LightningElement {

song='waka waka'
handleSong(event){
    this.song=event.target.value
}

handleCountry(event){
    this.address.country=event.target.value
}

@track
address={
    city:"new york",
    country:"USA"
}


}