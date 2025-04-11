import { LightningElement, track } from 'lwc';
export default class ForLoopPractice extends LightningElement {

    value;
    @track values = [];  //Creating New Array

    handleValue(event) {   //adding user input values to this values variable
        this.value = event.target.value;
    }
    handleAdd(){   
        if (this.value) {
            this.values = [...this.values, this.value]; //adding variable value to the values Array
            this.value = '';
        }
    }
    handleReset(){   //reset the input field value
        this.values = '';
    }
}