//
//  Walls.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class Walls: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Drywall, tape & skimcoat walls/ceilings in gutted house",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 6.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Drywall, tape, & skimcoat a wall (1/2\" thick)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 2.50,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Drywall, tape, & skimcoat a ceiling (1/2\" thick)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 1.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Skimcoating/texturing walls and ceilings only",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 1.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Patchwork section of a wall (drywall, tape, finish)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 500.00,
                                                    total: 0.00))
        super.init(type: "Walls", repairs: repairs)
    }
}
