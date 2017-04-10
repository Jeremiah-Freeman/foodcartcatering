export class Customer {
  constructor(
    public lat = '',
    public lon = '',
    public address = '',
    public instructions = '',
    public quadrantID = '',
    public name = '',
    public number = '',
    public email = '',
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
  }

  copyFields(fromCustomer: Customer) {
    this.lat = fromCustomer.lat;
    this.lon = fromCustomer.lon;
    this.address = fromCustomer.address;
    this.instructions = fromCustomer.instructions;
    this.quadrantID = fromCustomer.quadrantID;
    this.name = fromCustomer.name;
    this.number = fromCustomer.number;
    this.email = fromCustomer.email;
    this.$key = fromCustomer.$key;
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
    return message;
  }
}
