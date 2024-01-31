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
    dateInspected
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
  }
}

export default Property;
