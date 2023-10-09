
import Foundation
import SwiftUI

/// Property.swift
///  Object stores and modifies the information associated with a Property.
///  Includes: address, vacancy, date of estimation, number of beds and baths,
///      square footage, inspector for property, total cost of repairs, and
///      a list of type Category referring to the specific repairs estimated.
///
///  Created by Ellie Murphy on 8/12/23.
struct Property: Hashable {
    
    static var instance = Property() // Singleton instance
    
    /// equals method
    /// if the addresses of two properties are the same, they are the same property
    static func == (lhs: Property, rhs: Property) -> Bool {
        if(lhs.address.street == rhs.address.street &&
           lhs.address.city == rhs.address.city &&
           lhs.address.zip == rhs.address.zip) { return true }
        return false
    }
    
    
    /// address of the property containing the street, city, and zip code
    struct Address: Hashable {
        var street: String
        var city: String
        var zip: String
    }

    /// variable representation of Address struct
    var address: Address
    /// whether the property is currently vacant
    var vacancy: Bool
    /// date of inspection / estimation
    var date: Date
    /// number of bedrooms the property has
    var beds: Double
    /// number of bathrooms the property has
    var baths: Double
    /// square footage of the property
    var sqft: Double
    /// name of the inspector for the property
    var inspector: String
    /// total estimated cost of repairs on the property
    var totalCost: Double
    /// list of Category objects containing the specific repairs required for the property
    var repairs: [AbstractCategory] //String is a placeholder for the actual data type which will be Category
    
    /// Constructs the propInfo object with specified address, vacancy, date, beds, baths, sqft, inspector, total cost, and repairs
    /// - Parameter street: String representing what street the property is on
    /// - Parameter city: String representing what city the property is in
    /// - Parameter zip: String representing the zipcode of the property
    /// - Parameter vacancy: Bool representing whether the property is vacant or not
    /// - Parameter date: Util.Date object representing mm/dd the property was inspected on
    /// - Parameter beds: Double representing the number of bedrooms in the property
    /// - Parameter baths: Double representing the number of bathrooms in the property
    /// - Parameter sqft: Double representing the square footage of the property
    /// - Parameter inspector: String containing the name of the inspector who walked the property
    /// - Parameter totalCost: Double representing the total cost of estimated repairs
    /// - Parameter repairs: Array of Categories representing the different repairs that are estimated for the property
    private init(street: String, city: String, zip: String, vacancy: Bool, date: Date, beds: Double, baths: Double, sqft: Double, inspector: String, totalCost: Double, repairs: [AbstractCategory]) {
//        set_address(address: address)
//        set_vacancy(vacancy: vacancy)
//        set_date(date: date)
//        set_beds(beds: beds)
//        set_baths(baths: baths)
//        set_sqft(sqft: sqft)
//        set_inspector(inspector: inspector)
//        set_total_cost(totalCost: totalCost)
//        set_repairs(repairs: repairs)
        address = Address(street: street, city: city, zip: zip)
        self.vacancy = vacancy
        self.date = date
        self.beds = beds
        self.baths = baths
        self.sqft = sqft
        self.inspector = inspector
        self.totalCost = totalCost
        self.repairs = repairs
    }
    
    /// Constructs propInfo with default values. Default date is set to January 1st
    private init() {
        self.init(street: "", city: "", zip: "", vacancy: false, date: Date.init(), beds: 0, baths: 0, sqft: 0, inspector: "", totalCost: 0, repairs: [])
    }
    
    static func resetInstance() -> Void {
        instance = Property()
    }
    
    /// sets the property's address using the provided string
    mutating func set_address(street: String, city: String, zip: String) -> Void {
        address = Address.init(street: street, city: city, zip: zip)
    }

    /// returns the property's address as a String
    func get_address() -> String {
        return address.street + ", " + address.city + ", " + address.zip
    }

    /// sets the property's vacancy using the provided boolean
    mutating func set_vacancy(vacancy: Bool) -> Void {
        self.vacancy = vacancy
    }

    /// returns the property's vacancy as a Bool
    func get_vacancy() -> Bool {
        return self.vacancy
    }

    /// sets the date of the property's estimation / inspection with provided Date
    mutating func set_date(date: Date) -> Void {
        self.date = date
    }

    /// returns the date the property was inspected as a Date
    func get_date() -> Date {
        return self.date
    }

    /// sets the number of bedrooms in the property using the provided Double
    mutating func set_beds(beds: Double) -> Void {
        self.beds = beds
    }

    /// returns the number of bedrooms in the property as a Double
    func get_beds() -> Double {
        return self.beds
    }

    /// sets the number of bathrooms in the property with the provided Double
    mutating func set_baths(baths: Double) -> Void {
        self.baths = baths
    }

    /// returns the number of bathrooms in the property as a Double
    func get_baths() -> Double {
        return self.baths
    }

    /// sets the property's square footage using the provided Double
    mutating func set_sqft(sqft: Double) -> Void {
        self.sqft = sqft
    }

    /// returns the property's square footage as a Double
    func get_sqft() -> Double {
        return self.sqft
    }

    /// sets the property's inspector with provided String
    mutating func set_inspector(inspector: String) -> Void {
        self.inspector = inspector
    }

    /// returns property's inspector as a String
    func get_inspector() -> String {
        return self.inspector
    }

    /// sets property's total cost of estimated repairs with provided Double
    mutating func set_total_cost(totalCost: Double) -> Void {
        self.totalCost = totalCost
    }

    /// returns property's total cost of estimated repairs as Double
    func get_total_cost() -> Double {
        return self.totalCost
    }

    /// sets property's list of repairs with provided list of Categories
    mutating func set_repairs(repairs: [AbstractCategory]) -> Void {
        self.repairs = repairs
    }

    /// returns property's list of categories as an array of Categories
    func get_repairs() -> [AbstractCategory] {
        return self.repairs
    }
    
    func to_string() -> String {
        let formatter = DateFormatter()
        return "Property: \(address), \(vacancy), \(formatter.string(from: date)), \(beds), \(baths), \(sqft), \(inspector)"
    }

}
