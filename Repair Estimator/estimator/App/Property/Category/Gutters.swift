//
//  Gutters.swift
//  estimator
//
//  Created by Ellie Murphy on 10/7/23.
//

import Foundation

class Gutters: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Gutters & downspouts - demo & install new (Flat Cost)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 0.05,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Gutters & downspouts - demo & install new (Linear Foot)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 6.00,
                                                    total: 0.00))
        super.init(type: "Gutters", repairs: repairs)
    }
}
