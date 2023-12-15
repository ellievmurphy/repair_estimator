//
//  Mechanicals.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Mechanicals: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "HVAC",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 6000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New interior doors, closet doors, hardware, & trim (1500 sq ft house)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 2000.0,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Interior door - prehung hollow-core dore",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 175.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Interior sliding closet door",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 175.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Exterior front door - single door w/ hardware + deadbolt",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 150.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Exterior french patio door - double door",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 700.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Exterior sliding glass door - double door",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 850.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Crown molding",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 3.75,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New baseboard trim",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 2.75,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Raised panel wood wainscoting",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 17.50,
                                                    total: 0.00))
        super.init(type: "Mechanicals", repairs: repairs)
    }
}
