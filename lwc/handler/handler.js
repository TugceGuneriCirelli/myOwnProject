import { LightningElement } from 'lwc';

export default class Handler extends LightningElement {

name='tugce'

handleName(event){
 this.name=event.target.value
}

Country='Guneri'
handleClick(event){
this.Country=event.target.value
}

city='Istanbul'
cityProperty(event){
    this.city=event.target.value
}

}