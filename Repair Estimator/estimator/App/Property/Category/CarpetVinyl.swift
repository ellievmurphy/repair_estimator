//
//  CarpetVinyl.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class CarpetVinyl: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Carpet",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 1.35,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Vinyl or linoleum flooring",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 2.00,
                                                    total: 0.00))
        super.init(type: "Carpet/Vinyl", repairs: repairs)
    }
}
