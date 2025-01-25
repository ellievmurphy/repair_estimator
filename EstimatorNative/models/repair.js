class Repair {
  constructor(id, categoryId, name, isNeeded, quantity, unit, costPerUnit, total) {
    this.id = id;
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
