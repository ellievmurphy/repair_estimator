//
//  Roof.swift
//  estimator
//
//  Created by Ellie Murphy on 10/7/23.
//

import Foundation

class Roof: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        // adding roof repair types to repairs list (there has to be a better way to do this @.@)
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Roof (rip and replace) - architectural shingle",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf, 
                                                    costPerUnit: 4.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false, 
                                                    name: "Rollover (add a layer of shingles) - architectural shingle",
                                                    quantity: 0.00, 
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 2.50,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false, 
                                                    name: "Roof Sheathing - plywood 1/2\" remove & install",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 2.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Roof  repair/patch (hard)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 900.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Roof  repair/patch (easy)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 600.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Premium for 3 layer tear off",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 0.35,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Premium for steep pitched roof",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 0.20,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Fascia - demo & install new",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 3.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Soffit - demo & install new",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 4.00,
                                                    total: 0.00))
        
        
        super.init(type: "Roof", repairs: repairs)
    }
    
    /// Might not be needed, but function calculates the total cost for the provided repair.
    /// Based on repair's quantity and costPerUnit values
    func estimateTotal(quantity: Double, costPerUnit: Double) -> Double {
        return quantity * costPerUnit
    }
}
