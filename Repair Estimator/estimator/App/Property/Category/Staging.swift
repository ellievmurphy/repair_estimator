//
//  Staging.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Staging: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Staging (Kitchen, Baths, Living Room, 1 Bedroom",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 2000.00,
                                                    total: 0))
        super.init(type: "Staging", repairs: repairs)
    }
}
