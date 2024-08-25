import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService implements OnInit{

  constructor(private afs : AngularFirestore) { }

  ngOnInit(): void {
    
  }

  addSubData(subData){
    this.afs.collection('Subscriber').add(subData).then(()=>{
      console.log("Subscriber Added Successfully..")
    })
  }
  
  checkDuplicateSub(subEmail){
    return this.afs.collection('Subscriber',ref => ref.where('email','==',subEmail)).get()
  }




}
