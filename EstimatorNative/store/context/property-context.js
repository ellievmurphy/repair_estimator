import { createContext, useState } from "react";

import { getFormattedDate } from "../../util/date";

import { CATEGORIES } from "../../data/category-data";
import Property from "../../models/property";

export const PropertyContext = createContext({
  property: new Property(
    "",
    "",
    27606,
    true,
    require("../../assets/images/placeholder.png"),
    0,
    0,
    0,
    getFormattedDate(new Date()),
    "Single Family",
    "Brooks O'Hearn",
    0.0,
    [...CATEGORIES]
  ),
  updateTotal: (oldCost, newCost) => {},
  updateCategory: (category) => {},
});

function PropertyContextProvider({ children }) {
  const [currProperty, setCurrProperty] = useState(
    new Property(
      "",
      "",
      27606,
      true,
      require("../../assets/images/placeholder.png"),
      0,
      0,
      0,
      getFormattedDate(new Date()),
      "Single Family",
      "Brooks O'Hearn",
      0.0,
      [...CATEGORIES]
    )
  );

  function initProperty(newProperty) {
    setCurrProperty(newProperty);
  }

  function updateProperty(streetAddress, city, zip, vacant, imageUrl, beds, baths, sqft, date, type, inspector, totalCost, repairs) {
    setCurrProperty(
      new Property(
        streetAddress,
        city,
        zip,
        vacant,
        imageUrl,
        beds,
        baths,
        sqft,
        date,
        type,
        inspector,
        totalCost,
        repairs
      )
    );
  }

  function updateTotal(oldCost, newCost) {
    const updatedTotal = currProperty.totalCost - oldCost + newCost;
    setCurrProperty(
      new Property(
        currProperty.streetAddress,
        currProperty.city,
        currProperty.zip,
        currProperty.isVacant,
        currProperty.imageUrl,
        currProperty.beds,
        currProperty.baths,
        currProperty.sqft,
        currProperty.dateInspected,
        currProperty.type,
        currProperty.inspector,
        updatedTotal,
        currProperty.repairs
      )
    );
  }

  function updateCategory(updatedCategory) {
    const toUpdate = currProperty.repairs.filter(
      (category) => category.id === updatedCategory.id
    );
    console.log("Old: " + toUpdate + " | New: " + updateCategory);
  }

  const value = {
    property: currProperty,
    initProperty: initProperty,
    updateProperty: updateProperty,
    updateTotal: updateTotal,
    updateCategory: updateCategory
  }

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
}

export default PropertyContextProvider;
