//
//  Insulation.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Insulation: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Wall insulation",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 1.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Floor insulation",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 1.25,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Low end kitchen",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 8500.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Attic insulation, blown-in",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 0.80,
                                                    total: 0.00))
        super.init(type: "Insulation", repairs: repairs)
    }
}
