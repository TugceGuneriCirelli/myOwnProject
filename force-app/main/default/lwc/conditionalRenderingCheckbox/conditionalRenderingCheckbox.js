import { LightningElement } from 'lwc';

export default class ConditionalRenderingCheckbox extends LightningElement {

password='4d5G.8fh'
check=false

handleClick(event){
    this.check=event.target.checked
}

}