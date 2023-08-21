//
//  PropertyTest.swift
//  estimatorTests
//
//  Created by Ellie Murphy on 8/13/23.
//

import XCTest
@testable import estimator

final class PropertyTest: XCTestCase {

//    override func setUpWithError() throws {
//        // Put setup code here. This method is called before the invocation of each test method in the class.
//    }
//
//    override func tearDownWithError() throws {
//        // Put teardown code here. This method is called after the invocation of each test method in the class.
//    }

//    func testPerformanceExample() throws {
//        // This is an example of a performance test case.
//        self.measure {
//            // Put the code you want to measure the time of here.
//        }
//    }

    func testDefaultInit() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        // Any test you write for XCTest can be annotated as throws and async.
        // Mark your test throws to produce an unexpected failure when your test encounters an uncaught error.
        // Mark your test async to allow awaiting for asynchronous code to complete. Check the results with assertions afterwards.
        let p = Property.init()
        
        XCTAssertEqual("", p.address)
        XCTAssertFalse(p.vacancy)
        XCTAssertEqual(1, p.date.month)
        XCTAssertEqual(1, p.date.day)
        XCTAssertEqual(0, p.beds)
        XCTAssertEqual(0, p.baths)
        XCTAssertEqual(0, p.sqft)
        XCTAssertEqual("Placeholder", p.inspector)
        XCTAssertEqual(0, p.totalCost)
        XCTAssertEqual(0, p.repairs.count)    
    }
}
