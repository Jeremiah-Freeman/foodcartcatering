export class Order {
  constructor(
    public foodCartID = '',
    public delivererID = '',
    public customerID = '',
    public productionCompletionStatus = false,
    public deliveryCompletionStatus = false,
    public orderRequestTimestamp = '',
    public requestedDeliveryTime = '',
    public orderAcceptedTimestamp = '',
    public deliveryTimeEstimate = '',
    public orderReadyTime = '',
    public delayTime = '',
    public pickupTimestamp = '',
    public deliveryTimestamp = '',
    public $key = null
  ) { }

  sanitizeFields() {
    this.foodCartID = this.foodCartID.trim();
    this.delivererID = this.delivererID.trim();
    this.customerID = this.customerID.trim();
    this.orderRequestTimestamp = this.orderRequestTimestamp.trim();
    this.requestedDeliveryTime = this.requestedDeliveryTime.trim();
    this.orderAcceptedTimestamp = this.orderAcceptedTimestamp.trim();
    this.deliveryTimeEstimate = this.deliveryTimeEstimate.trim();
    this.orderReadyTime = this.orderReadyTime.trim();
    this.delayTime = this.delayTime.trim();
    this.pickupTimestamp = this.pickupTimestamp.trim();
    this.deliveryTimestamp = this.deliveryTimestamp.trim();
  }

  copyFields(fromOrder: Order) {
    this.foodCartID = fromOrder.foodCartID;
    this.delivererID = fromOrder.delivererID;
    this.customerID = fromOrder.customerID;
    this.productionCompletionStatus = fromOrder.productionCompletionStatus;
    this.deliveryCompletionStatus = fromOrder.deliveryCompletionStatus;
    this.orderRequestTimestamp = fromOrder.orderRequestTimestamp;
    this.requestedDeliveryTime = fromOrder.requestedDeliveryTime;
    this.orderAcceptedTimestamp = fromOrder.orderAcceptedTimestamp;
    this.deliveryTimeEstimate = fromOrder.deliveryTimeEstimate;
    this.orderReadyTime = fromOrder.orderReadyTime;
    this.delayTime = fromOrder.delayTime;
    this.pickupTimestamp = fromOrder.pickupTimestamp;
    this.deliveryTimestamp = fromOrder.deliveryTimestamp;
    this.$key = fromOrder.$key;
  }

  validationMessage() {
    this.sanitizeFields();
    let message = '';
    if (!this.customerID) {
      message += (message ? '  ' : '') + 'Customer is required.';
    }
    if (!this.requestedDeliveryTime) {
      message += (message ? '  ' : '') + 'Requested Delivery Time is required.';
    }
    return message;
  }
}
