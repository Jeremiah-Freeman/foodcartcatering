export class FoodCart {
  constructor(
    public lat = 0,
    public lon = 0,
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
    this.address = this.address.trim();
    this.instructions = this.instructions.trim();
    this.quadrantID = this.quadrantID.trim();
    this.name = this.name.trim();
    this.number = this.number.trim();
    this.email = this.email.trim();
    this.open = this.open.trim();
    this.close = this.close.trim();
  }

  copyFields(fromFoodCart: FoodCart) {
    this.lat = fromFoodCart.lat;
    this.lon = fromFoodCart.lon;
    this.address = fromFoodCart.address;
    this.instructions = fromFoodCart.instructions;
    this.quadrantID = fromFoodCart.quadrantID;
    this.name = fromFoodCart.name;
    this.number = fromFoodCart.number;
    this.email = fromFoodCart.email;
    this.open = fromFoodCart.open;
    this.close = fromFoodCart.close;
    this.maximumOrderSize = fromFoodCart.maximumOrderSize;
    this.$key = fromFoodCart.$key;
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
