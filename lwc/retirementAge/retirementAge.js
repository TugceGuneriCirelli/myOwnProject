import { LightningElement } from 'lwc';

export default class RetirementAge extends LightningElement {
retirementAgee=65
age=34
handleAge(event){
    this.age=event.target.value
}

get findRetirementAge(){
    if(this.age<0){
        return 'Age can not be less then zero'
    }else if(this.age>150){
return 'you are probably death'
    }else if(this.age>=65){
return 'you can be retired'
    }   
    else{
        return `${this.retirementAgee-this.age} years more you have to work`
    }
    
}

}