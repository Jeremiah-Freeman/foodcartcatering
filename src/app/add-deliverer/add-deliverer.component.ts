import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-deliverer',
  templateUrl: './add-deliverer.component.html',
  styleUrls: ['./add-deliverer.component.css']
})
export class AddDelivererComponent implements OnInit {
  deliverer = [];
  constructor() { }

  ngOnInit() {
    this
  }

}
