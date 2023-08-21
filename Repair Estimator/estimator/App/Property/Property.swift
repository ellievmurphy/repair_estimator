//
//  Property.swift
//  Object stores and modifies the information associated with a Property.
//  Includes: address, vacancy, date of estimation, number of beds and baths,
//      square footage, inspector for property, total cost of repairs, and
//      a list of type Category referring to the specific repairs estimated.
//
//  Created by Ellie Murphy on 8/12/23.
//

import Foundation
import SwiftUI

class Property {

    // address of the property
    var address: String
    // whether the property is currently vacant
    var vacancy: Bool
    // date of inspection / estimation
    var date: Date
    // number of bedrooms the property has
    var beds: Double
    // number of bathrooms the property has
    var baths: Double
    // square footage of the property
    var sqft: Double
    // name of the inspector for the property
    var inspector: String
    // total estimated cost of repairs on the property
    var totalCost: Double
    // list of Category objects containing the specific repairs required for the property
    var repairs: [String] //String is a placeholder for the actual data type which will be Category
    
    // Constructs the propInfo object with specified address, vacancy, date, beds, baths, sqft, inspector, total cost, and repairs
    init(address: String, vacancy: Bool, date: Date, beds: Double, baths: Double, sqft: Double, inspector: String, totalCost: Double, repairs: [String]) {
//        set_address(address: address)
//        set_vacancy(vacancy: vacancy)
//        set_date(date: date)
//        set_beds(beds: beds)
//        set_baths(baths: baths)
//        set_sqft(sqft: sqft)
//        set_inspector(inspector: inspector)
//        set_total_cost(totalCost: totalCost)
//        set_repairs(repairs: repairs)
        self.address = address
        self.vacancy = vacancy
        self.date = date
        self.beds = beds
        self.baths = baths
        self.sqft = sqft
        self.inspector = inspector
        self.totalCost = totalCost
        self.repairs = repairs
    }
    
    // Constructs propInfo with default values
    // Default date is set to January 1st
    convenience init() {
        self.init(address: "", vacancy: false, date: Date.init(), beds: 0, baths: 0, sqft: 0, inspector: "Placeholder", totalCost: 0, repairs: [])
    }
    
    // sets the property's address using the provided string
    func set_address(address: String) -> Void {
        self.address = address
    }

    // returns the property's address as a String
    func get_address() -> String {
        return self.address
    }

    // sets the property's vacancy using the provided boolean
    func set_vacancy(vacancy: Bool) -> Void {
        self.vacancy = vacancy
    }

    // returns the property's vacancy as a Bool
    func get_vacancy() -> Bool {
        return self.vacancy
    }

    // sets the date of the property's estimation / inspection with provided Date
    func set_date(date: Date) -> Void {
        self.date = date
    }

    // returns the date the property was inspected as a Date
    func get_date() -> Date {
        return self.date
    }

    // sets the number of bedrooms in the property using the provided Double
    func set_beds(beds: Double) -> Void {
        self.beds = beds
    }

    // returns the number of bedrooms in the property as a Double
    func get_beds() -> Double {
        return self.beds
    }

    // sets the number of bathrooms in the property with the provided Double
    func set_baths(baths: Double) -> Void {
        self.baths = baths
    }

    // returns the number of bathrooms in the property as a Double
    func get_baths() -> Double {
        return self.baths
    }

    // sets the property's square footage using the provided Double
    func set_sqft(sqft: Double) -> Void {
        self.sqft = sqft
    }

    // returns the property's square footage as a Double
    func get_sqft() -> Double {
        return self.sqft
    }

    // sets the property's inspector with provided String
    func set_inspector(inspector: String) -> Void {
        self.inspector = inspector
    }

    // returns property's inspector as a String
    func get_inspector() -> String {
        return self.inspector
    }

    // sets property's total cost of estimated repairs with provided Double
    func set_total_cost(totalCost: Double) -> Void {
        self.totalCost = totalCost
    }

    // returns property's total cost of estimated repairs as Double
    func get_total_cost() -> Double {
        return self.totalCost
    }

    // sets property's list of repairs with provided list of Categories
    func set_repairs(repairs: [String]) -> Void {
        self.repairs = repairs
    }

    // returns property's list of categories as an array of Categories
    func get_repairs() -> [String] {
        return self.repairs
    }

}
