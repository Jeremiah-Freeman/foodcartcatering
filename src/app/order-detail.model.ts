export class OrderDetail {
  constructor(
    public orderID = '',
    public menuItemID = '',
    public notes = '',
    public quantity = 0,
    public $key = null
  ) { }

  sanitizeFields() {
    this.orderID = this.orderID.trim();
    this.menuItemID = this.menuItemID.trim();
    this.notes = this.notes.trim();
  }

  copyFields(fromOrderDetail: OrderDetail) {
    this.orderID = fromOrderDetail.orderID;
    this.menuItemID = fromOrderDetail.menuItemID;
    this.notes = fromOrderDetail.notes;
    this.quantity = fromOrderDetail.quantity;
    this.$key = fromOrderDetail.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.orderID) {
      message += (message ? '  ' : '') + 'Order ID is required.';
    }
    if (!this.menuItemID) {
      message += (message ? '  ' : '') + 'Menu Item ID is required.';
    }
    if (!this.quantity) {
      message += (message ? '  ' : '') + 'Quantity is required.';
    }
    return message;
  }
}
