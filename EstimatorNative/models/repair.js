class Repair {
  constructor(categoryId, name, isNeeded, quantity, unit, costPerUnit, total) {
    this.categoryId = categoryId;
    this.name = name;
    this.isNeeded = isNeeded;
    this.quantity = quantity;
    this.unit = unit;
    this.costPerUnit = costPerUnit;
    this.total = total;
  }
}

export default Repair;
