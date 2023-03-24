import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {

    @track
candidates=[
   {
    name:"tugce",
    id:1
   },
   {
    name:"zak",
    id:2
   },
   {
    name:"oguzhan",
    id:3
   }

]

objIds=4;
handleName(event){
 this.objIds++
 const newName=event.target.value
 const obj={
    name:newName,
    id:this.objIds
 }
 this.candidates.push(obj);
}


}