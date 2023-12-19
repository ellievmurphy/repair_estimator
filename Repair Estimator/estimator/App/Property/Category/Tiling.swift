//
//  Tiling.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Tiling: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Ceramic floor tile - kitchen",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 10.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Backsplash wall tile - kitchen",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 15.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Ceramic floor tile - bathroom",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 8.00,
                                                    total: 0.00))
        // Usually this value is 70sq. ft. so I added it by default. Total is calculated total with 70sq. ft.
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Shower wall tile - bathroom",
                                                    quantity: 70.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 9.00,
                                                    total: 9 * 70))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Shower accent wall tile - bathroom",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 16.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Ceramic floor tile - other",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 8.00,
                                                    total: 0.00))
        super.init(type: "Tiling", repairs: repairs)
    }
}

