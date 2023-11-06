//
//  Fence.swift
//  estimator
//
//  Created by Nick Case on 11/5/23.
//

import Foundation

class Fence: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Wood fencing",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 15.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Wrought iron fencing",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 45.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Chain-link fence",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 8.00,
                                                    total: 0.00))
        super.init(type: "Fence", repairs: repairs)
    }
}
