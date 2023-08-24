//
//  File.swift
//  Date object meant to replace the native Date class which includes time.
//  Dates will be stored with only mm/dd
//
//  Created by Ellie Murphy on 8/14/23.
//

import Foundation

class CutDate {
    // Stores the date's month
    var month: Int = 0
    // Stores the date's day
    var day: Int = 0
    // Tracks the number of days in each month
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // Shortened String version of each month
    let months = ["jan", "feb", "mar","abr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    
    // Constructs a date object with provided month and day as Ints
    init(month: Int, day: Int) {
        set_month(month: month)
        self.day = day
    }
    
    convenience init() {
        self.init(month: 1, day: 1)
    }
    
    // Updates the month using provided Int
    // throws error if the provided month is less than 1 or greater than 12
    func set_month(month: Int) -> Void {
        if(month < 1 || month > 12) {
            fatalError("Invalid month")
        }
        self.month = month
    }
    
    // Updates the day using the provided Int
    // throws error if the month was invalid / not set, day is less than 1 / greater than 31,
    //   or if number of days exceeds days in the curent month
    func set_day(day: Int) -> Void {
        if(day < 1 || day > 31) {
            fatalError("Invalid month")
        }
        if(month == 0) {
            fatalError("Invalid month, cannot set days")
        } else if (day > daysInMonths[month - 1]) {
            fatalError(String(day) + " is an invalid number of days for " + String(month))
        }
    }
    
    // Returns a String version of the date stored in the current object
    func toString() -> String {
        return String(daysInMonths[month - 1]) + " " + String(day)
    }
}
