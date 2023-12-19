//
//  TermitesAbatement.swift
//  estimator
//
//  Created by Ellie Murphy on 12/14/23.
//

import Foundation

class TermitesAbatement: AbstractCategory {
    
    init() {
        var repairs = [AbstractCategory.Subcategory]()
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Termite fumigation & treatment",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 1000.00,
                                                    total: 0))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Mold removal & abatement - minimum",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 2000.0,
                                                    total: 0.00))
        repairs.append(AbstractCategory.Subcategory(needed: false,
                                                    name: "Asbestos removal & abatement - minimum",
                                                    quantity: 0.00,
                                                    unit: AbstractCategory.ReUnit.ls,
                                                    costPerUnit: 1500.0,
                                                    total: 0.00))
        super.init(type: "Termites/Abatement", repairs: repairs)
    }
}
