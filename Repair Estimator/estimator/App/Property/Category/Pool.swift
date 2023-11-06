//
//  Pool.swift
//  estimator
//
//  Created by Nick Case on 11/5/23.
//

import Foundation

class Pool: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Pool Completely Redone ($10k to $15k)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 10000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Pool (redo plaster only)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 4500.00,
                                                    total: 0.00))
        super.init(type: "Pool", repairs: repairs)
    }
}
