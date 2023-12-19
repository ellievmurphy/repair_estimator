//
//  Basement.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Basement: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Pour concrete floor in basement",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sy,
                                                    costPerUnit: 175.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Seal basement",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 250.0,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Install sump pump",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 1000.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Install french drains (depends on condition - L x W)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 125.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Reframe support beam",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Replace stairs",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 1000.00,
                                                    total: 0.00))
        super.init(type: "Basement", repairs: repairs)
    }
}
