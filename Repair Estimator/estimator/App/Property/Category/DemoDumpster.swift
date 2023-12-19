//
//  DemoDumpster.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class DemoDumpster: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Demolition work (cost to fill one 40yd dumpster)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Dumpster rental (40 yd)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.0,
                                                    total: 0.00))
        super.init(type: "Demo & Dumpsters", repairs: repairs)
    }
}
