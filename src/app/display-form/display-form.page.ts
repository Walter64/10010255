import { Component, OnInit } from '@angular/core';

// import the local storage
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.page.html',
  styleUrls: ['./display-form.page.scss'],
})
export class DisplayFormPage implements OnInit {

  firstname:string;
  lastname:string;
  number:string;

  constructor(private storage:Storage) { }

  ngOnInit() {
    // get first name
    this.storage.get("firstname").then(
      (data)=>{
        this.firstname = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    // get last name
    this.storage.get("lastname").then(
      (data)=>{
        this.lastname = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    // get id number
    this.storage.get("number").then(
      (data)=>{
        this.number = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

}
