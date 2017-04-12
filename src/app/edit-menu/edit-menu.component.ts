import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './../menu-item.model';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
  providers: [DataService]
})
export class EditMenuComponent implements OnInit {

  @Input() foodCartId: string;
  public menuItems: FirebaseListObservable<any[]>;
  newForm = true;
  editForm = false;
  deleteForm = false;
  edit = new MenuItem();
  editValidationMessage = '';

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getMenuItemsByFoodCartId(this.foodCartId);
  }

  resetForm(setNew = true) {
    this.edit = new MenuItem();
    this.newForm = false;
    this.deleteForm = false;
    this.editForm = false;
    if (setNew) {
      this.newForm = true;
    }
  }

  saveNewMenuItem() {
    this.editValidationMessage = this.edit.validationMessage();

    if (!this.editValidationMessage) {
      this.edit.foodCartID = this.foodCartId;
      const promise = this.dataService.addMenuItem(this.edit);
      promise.then((success) => {
        this.resetForm();
      }).catch((failure) => {
        console.log('Menu Item Save New Failed!');
        console.log(failure);
      });
    }
  }

  deleteMenuItem( menuItem ) {
    this.resetForm(false);
    this.edit = menuItem;
    this.deleteForm = true;
  }

  deleteMenuItemConfirmed() {
    const promise = this.dataService.deleteMenuItem(this.edit);
    promise.then((success) => {
      this.resetForm();
    }).catch((failure) => {
      console.log('MenuItem Delete Failed!');
      console.log(failure);
    });
  }

  editMenuItem(menuItem) {
    this.resetForm(false);
    this.edit.copyFields(menuItem);
    this.editForm = true;
  }

  updateMenuItem() {
    this.editValidationMessage = this.edit.validationMessage();

    if (!this.editValidationMessage) {
      const promise = this.dataService.updateMenuItem(this.edit);
      promise.then((success) => {
        this.resetForm();
      }).catch((failure) => {
        console.log('Menu Item Update Failed!');
        console.log(failure);
      });
    }
  }


}
