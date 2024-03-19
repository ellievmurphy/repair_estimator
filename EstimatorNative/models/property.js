class Property {
  constructor(
    streetAddress,
    city,
    zip,
    isVacant,
    imageUrl,
    beds,
    baths,
    sqft,
    dateInspected,
    type,
    inspector,
    totalCost,
    repairs
  ) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.imageUrl = imageUrl;
    this.baths = baths;
    this.sqft = sqft;
    this.beds = beds;
    this.isVacant = isVacant;
    this.zip = zip;
    this.dateInspected = dateInspected;
    this.type = type;
    this.inspector = inspector;
    this.totalCost = totalCost;
    this.repairs = repairs;
  }
}

export default Property;
