import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Deliverer } from '../deliverer.model';
import { DataService } from '../data.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deliverer-edit',
  templateUrl: './deliverer-edit.component.html',
  styleUrls: ['./deliverer-edit.component.css'],
  providers: [DataService]
})
export class DelivererEditComponent implements OnInit {
  delivererId: string = null;
  deliverer;
  edit = new Deliverer();
  editValidationMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.delivererId = urlParameters['id'];
      this.dataService.getDelivererById(this.delivererId).subscribe((deliverer) => {
        this.deliverer = deliverer;
      });
    });
  }


  updateDeliverer(){
    this.editValidationMessage = this.edit.validationMessage();
    if(!this.editValidationMessage){
      const promise = this.dataService.updateDeliverer(this.edit);
      promise.then((success) => {
        // add id to this route to show specific delivery page
        this.router.navigate(['delivery-overview/']);
      }).catch((failure) => {
        console.log('Deliverer save failed');
      });
    }
  }

}
