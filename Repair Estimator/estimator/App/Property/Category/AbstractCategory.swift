//
//  AbstractCategory.swift
//  estimator
//
//  Created by Ellie Murphy on 8/25/23.
//

import Foundation

class AbstractCategory {
    enum ReUnit {
        case lf
        case sf
        case ea
        case ls
        case sy
    }
    
    struct Subcategory {
        var needed: Bool
        var repairType: String
        var quantity: Double
        var unit: ReUnit
        var costPerUnit: Double
        var total: Double
    }
    
    private var name: String
    private var subcategories: [Subcategory]
    
    init(name: String, subcategories: [Subcategory]) {
        self.name = name
        self.subcategories = subcategories
    }
    
    func set_name(name: String) -> Void {
        self.name = name
    }
    
    func get_name() -> String {
        return name
    }
    
    func set_subcategories(subcategories: [Subcategory]) -> Void {
        self.subcategories = subcategories
    }
    
    func get_subcategories() -> [Subcategory] {
        return subcategories
    }
}
