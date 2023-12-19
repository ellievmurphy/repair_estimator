//
//  BathroomItem.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class BathroomItem: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Vanity cabinet",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 700.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Vanity Countertop - granite or other hard surface",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 150.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Vanity mirror",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 75.00,
                                                    total: 0.00))
        // Usually this value is 70sq. ft. so I added it by default. Total is calculated total with 70sq. ft.
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Sink",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 125.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Toilet",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 200.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Bathtub - fiberglass",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 450.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Bathtub & shower surround - fiberglass",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Shower stall & surround - fiberglass",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 400.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Showerhead & faucet kit",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 210.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Bathroom towel bar kit",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 75.00,
                                                    total: 0.00))
        super.init(type: "Bathroom (By Item)", repairs: repairs)
    }
}
