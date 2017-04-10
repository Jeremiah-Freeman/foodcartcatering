export class User {

  constructor(
    public email = '',
    public partnerType = 'c',
    public $key = null
  ) { }

  sanitizeFields() {
    this.email = this.email.trim();
    this.partnerType = this.partnerType.trim();
  }

  copyFields(fromUser: User) {
    this.email = fromUser.email;
    this.partnerType = fromUser.partnerType;
    this.$key = fromUser.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.email) {
      message += (message ? '  ' : '') + 'Email is required.';
    }
    if (!this.partnerType) {
      message += (message ? '  ' : '') + 'Partner Type is required.';
    }
    return message;
  }
}
}
