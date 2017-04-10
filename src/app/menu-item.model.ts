export class MenuItem {
  constructor(
    public name = '',
    public description = '',
    public price = 0,
    public rating = null,
    public foodCartID = '',
    public $key = null
  ) { }

  sanitizeFields() {
    this.name = this.name.trim();
    this.description = this.description.trim();
  }

  copyFields(fromMenuItem: MenuItem) {
    this.name = fromMenuItem.name;
    this.description = fromMenuItem.description;
    this.price = fromMenuItem.price;
    this.rating = fromMenuItem.rating;
    this.foodCartID = fromMenuItem.foodCartID;
    this.$key = fromMenuItem.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.name) {
      message += (message ? '  ' : '') + 'Name is required.';
    }
    if (!this.description) {
      message += (message ? '  ' : '') + 'Description is required.';
    }
    if (!this.price) {
      message += (message ? '  ' : '') + 'Price is required.';
    }
    if (!this.foodCartID) {
      message += (message ? '  ' : '') + 'Food Cart ID is required.';
    }
    return message;
  }
}
