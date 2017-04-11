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
        console.log(this.deliverer);
      });
    });
  }

}
