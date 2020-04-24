import { Component, OnInit } from '@angular/core';

// import the local storage
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  firstname:string;
  lastname:string;
  number:string;

  // inject storage into constructor so app can access it
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSave(){
    this.storage.set("firstname", this.firstname);
    this.storage.set("lastname", this.lastname);
    this.storage.set("number", this.number);
  }

}
