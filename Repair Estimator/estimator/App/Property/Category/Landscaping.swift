//
//  Landscaping.swift
//  estimator
//
//  Created by Nick Case on 11/1/23.
//

import Foundation

class Landscaping: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Full landscaping makeover large lot",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 5000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Full landscaping makeover medium lot",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 3500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Full landscaping makeover small lot",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 2000.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Clean up landscaping & yard only",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Tree removal (per tree)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Tree Planting (per tree)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 130.00,
                                                    total: 0.00))
        super.init(type: "Landscaping", repairs: repairs)
    }
}
