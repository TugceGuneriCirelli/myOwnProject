import { LightningElement, wire } from 'lwc';
import allAccount from "@salesforce/apex/AccountRecords.allAccount"
export default class WireDecorator extends LightningElement {

    @wire(allAccount)accs;



}