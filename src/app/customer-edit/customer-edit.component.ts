import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [DataService]
})
export class CustomerEditComponent implements OnInit {
  customerId: string = null;
  customer;
  edit = new Customer();
  editValidationMessage = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.customerId = urlParameters['id'];
      this.dataService.getCustomerById(this.customerId).subscribe((customer) => {
        this.customer = customer;
        this.edit.copyFields(this.customer);
      });
    });
  }

  updateCustomer(){
    this.editValidationMessage = this.edit.validationMessage();
    if(!this.editValidationMessage){
      const promise = this.dataService.updateCustomer(this.edit);
      promise.then((success) => {
        // add id to this route to show specific delivery page
        this.router.navigate(['customer-overview/']);
      }).catch((failure) => {
        console.log('Customer save failed');
      });
    }
  }

}
