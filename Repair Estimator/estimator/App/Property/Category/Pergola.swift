//
//  Pergola.swift
//  estimator
//
//  Created by Nick Case on 11/5/23.
//

import Foundation

class Pergola: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New pergola canopy 15'x15'",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 2500.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New pergola canopy 10'x10'",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 2000.00,
                                                    total: 0.00))
        super.init(type: "Pergola", repairs: repairs)
    }
}
