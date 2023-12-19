//
//  Foundation.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class HomeFoundation: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Excavation - dig footing trenching",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 20.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Excavation - backfill of trenches",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 10.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New foundation - pour concrete footing",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 30.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New foundation - pour concrete slab on grade (4\" thick)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.sf,
                                                    costPerUnit: 4.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "New foundation - pour stem wall for single story house",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.lf,
                                                    costPerUnit: 100.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Repair existing foundation ($10k min - get quote)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 10000.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Repair existing foundation - stair mid jacking (varies)",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 800.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Repair existing foundation - bowing walls support with l beams",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 800.00,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Repair existing foundation - settled walls support w/ piers",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ea,
                                                    costPerUnit: 1200.00,
                                                    total: 0.00))
        super.init(type: "Foundation", repairs: repairs)
    }
}
