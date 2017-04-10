export class Foodcart {
  constructor(
    public lat = '',
    public lon = '',
    public address = '',
    public instructions = '',
    public quadrantID = '',
    public name = '',
    public number = '',
    public email = '',
    public open = '',
    public close = '',
    public maximumOrderSize = 0,
    public $key = null
  ) { }

  sanitizeFields() {
    this.lat = this.lat.trim();
    this.lon = this.lon.trim();
    this.address = this.address.trim();
    this.instructions = this.instructions.trim();
    this.quadrantID = this.quadrantID.trim();
    this.name = this.name.trim();
    this.number = this.number.trim();
    this.email = this.email.trim();
    this.open = this.open.trim();
    this.close = this.close.trim();
  }

  copyFields(fromFoodcart: Foodcart) {
    this.lat = fromFoodcart.lat;
    this.lon = fromFoodcart.lon;
    this.address = fromFoodcart.address;
    this.instructions = fromFoodcart.instructions;
    this.quadrantID = fromFoodcart.quadrantID;
    this.name = fromFoodcart.name;
    this.number = fromFoodcart.number;
    this.email = fromFoodcart.email;
    this.open = fromFoodcart.open;
    this.close = fromFoodcart.close;
    this.maximumOrderSize = fromFoodcart.maximumOrderSize;
    this.$key = fromFoodcart.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.name) {
      message += (message ? '  ' : '') + 'Name is required.';
    }
    if (!this.address) {
      message += (message ? '  ' : '') + 'Address is required.';
    }
    if (!this.number) {
      message += (message ? '  ' : '') + 'Phone Number is required.';
    }
    if (!this.maximumOrderSize) {
      message += (message ? '  ' : '') + 'Maximimum Order Size is required.';
    }
    return message;
  }
}
