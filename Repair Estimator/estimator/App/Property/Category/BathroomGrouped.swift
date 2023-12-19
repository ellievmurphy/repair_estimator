//
//  BathroomGrouped.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class BathroomGrouped: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Luxury master bath - replace everything",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 9000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Master Bath - replace everything",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 5500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Secondary Bath - replace everything",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 3000.00,
                                                    total: 0.00))
        super.init(type: "Bathroom (Grouped)", repairs: repairs)
    }
}
