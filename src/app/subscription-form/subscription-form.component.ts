import { Component } from '@angular/core';
import { Sub } from '../model/sub';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {

  isEmailError : boolean = false;
  isSubscribed : boolean = false;
  constructor(private subService : SubscriberService){}

  onSubmit(formValue){
    
    const subData :Sub = {
        name : formValue.name,
        email: formValue.email
    }
    this.subService.checkDuplicateSub(subData.email).subscribe(val => {
      if(val.empty){
        this.subService.addSubData(subData);
        this.isSubscribed = true;
      }else{
        this.isEmailError = true
      }
    })
    
  }


}
