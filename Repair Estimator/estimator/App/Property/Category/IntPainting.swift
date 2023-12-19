//
//  IntPainting.swift
//  estimator
//
//  Created by Ellie Murphy on 10/8/23.
//

import Foundation

class IntPainting: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Interior painting only",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 2.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Add extra wall prep (damaged walls)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 0.50,
                                                    total: 0.00))
        super.init(type: "Painting (interior)", repairs: repairs)
    }
}
