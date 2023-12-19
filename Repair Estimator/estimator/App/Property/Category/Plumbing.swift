//
//  Plumbing.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Plumbing: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New plumbing system in entire house (1,500 sqft 3/2 house",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 7000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Replace tankless hot water heater",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 1500.0,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Replace gas hot water heater - 40 gal",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 1000.00,
                                                    total: 0.00))
        super.init(type: "Doors & Trim", repairs: repairs)
    }
}
