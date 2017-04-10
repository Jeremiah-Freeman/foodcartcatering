export class Deliverer {
  constructor(
    public lat = '',
    public lon = '',
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
    this.instructions = this.instructions.trim();
    this.quadrantID = this.quadrantID.trim();
    this.name = this.name.trim();
    this.number = this.number.trim();
    this.email = this.email.trim();
  }

  copyFields(fromDeliverer: Deliverer) {
    this.lat = fromDeliverer.lat;
    this.lon = fromDeliverer.lon;
    this.instructions = fromDeliverer.instructions;
    this.quadrantID = fromDeliverer.quadrantID;
    this.name = fromDeliverer.name;
    this.number = fromDeliverer.number;
    this.email = fromDeliverer.email;
    this.$key = fromDeliverer.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.name) {
      message += (message ? '  ' : '') + 'Name is required.';
    }
    if (!this.number) {
      message += (message ? '  ' : '') + 'Phone Number is required.';
    }
    return message;
  }
}
