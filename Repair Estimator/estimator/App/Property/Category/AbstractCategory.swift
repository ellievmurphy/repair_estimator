//
//  AbstractCategory.swift
//  estimator
//
//  Created by Ellie Murphy on 8/25/23.
//

import Foundation

/// Represents the outline for any Category object.
/// All category objects will contain the type of category (ex. roof or landscaping),
///     and a list of subcategories which represent the repairs that fall under each
///     category (ex. "full landscaping makeover large lot")
class AbstractCategory: Hashable, Identifiable {
    static func == (lhs: AbstractCategory, rhs: AbstractCategory) -> Bool {
        return lhs.type == rhs.type
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(type)
        hasher.combine(repairs)
    }
    
    var type: String
    var repairs: [Subcategory]
    var totalCost: Double
    
    init(type: String, repairs: [Subcategory]) {
        self.type = type
        self.repairs = repairs
        self.totalCost = 0.0
    }
    
    func updateCost() -> Double {
        for repair in repairs {
            totalCost += repair.total
        }
        return totalCost
    }
    
    func setNeededRepair(repairName: String) -> Void {
        var intendedRepair: Subcategory
        for repair in repairs {
            if(repairName == repair.name) {
                intendedRepair = repair
                intendedRepair.needed = intendedRepair.needed == true ? false : true
                
                break
            }
        }
        
    }
    
    /// Represents the type of available units for repairs:
    /// - lf: linear feet
    /// - sf: square feet
    /// - ea: each
    /// - ls: lump sum
    /// - sy: square yards
    enum ReUnit {
        case lf
        case sf
        case ea
        case ls
        case sy
    }
    
    /// Struct containing the outline for each subcategory in a repair category
    /// contains the following variables:
    /// - needed: Bool representing whether this repair type will be needed
    /// - name: String representing the name of the subcategory
    /// - quantity: Double representing the number of units estimated for this repair
    /// - unit: ReUnit representing the kind of units this repair uses (lf, sf, ea, ls, or sy)
    /// - costPerUnit: Double representing the cost per unit of the estimated repair
    /// - total: Double representing the *costPerUnit* _multiplied by_ *quantity* of repair
    struct Subcategory: Hashable, Identifiable {
        var id: String{name}
        var needed: Bool
        var name: String
        var quantity: Double
        var unit: ReUnit
        var costPerUnit: Double
        var total: Double
    }
}
