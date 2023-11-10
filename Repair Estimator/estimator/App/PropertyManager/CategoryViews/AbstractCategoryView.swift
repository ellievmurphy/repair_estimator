//
//  AbstractCategoryView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/25/23.
//

import SwiftUI
import UIKit

struct AbstractCategoryView: View {
    @Environment(\.defaultMinListRowHeight) var minRowHeight
    @State var repairCategory: AbstractCategory
    @State var isNeeded: Bool = false
    @State var total: Double = 0.0
    // TODO: create one dictionary w/ struct value representation that holds all the subcategory info
    @State var quantity: String = ""
    @State var repairsNeeded: Dictionary<String, Bool>
//    @State var repairTracker: Dictionary<String, RepairData>
    @State var comments: String = ""
    var body: some View {
//        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
//        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        
        
        
        ScrollView {
            ZStack(alignment: Alignment(horizontal: .center, vertical: .top)) {
                VStack {
                    HStack {
                        Text("\(repairCategory.type):")
                            .frame(height: 75)
                            .foregroundStyle(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 36))
                            .padding(.trailing, 60)
                        
                        Text("$" + String(format: "%.2f", repairCategory.totalCost))
                            .frame(height: 75)
                            .foregroundStyle(color3)
                            .font(Font.custom("InknutAntiqua-Regular", size: 36))
                            .padding(.trailing, 0)
                        
                    }
                    Toggle("Repair Needed?", isOn: $isNeeded)
                        .toggleStyle(.switch)
                        .font(Font.custom("InknutAntiqua-Regular", size: 14))
                        .frame(width:200)
                    
                    List(repairCategory.repairs) {repair in
                        DisclosureGroup(repair.name) {
                                Grid {
                                    GridRow {
                                        Text("Per \(repairCategory.get_unit(unit: repair.unit)): $\(String(format: "%.2f", repair.costPerUnit))")
                                        Text("Total: $\(String(format: "%.2f", repair.costPerUnit * (Double(quantity) ?? 0.0)))")
                                    }
                                    GridRow {
                                        Text("Quantity: ")
                                        TextField("Quantity", text: $quantity)
                                    }
                                }.ignoresSafeArea()
                            
                        }.font(Font.custom("InknutAntiqua-Regular", size: 14))
                    }.listStyle(.plain).frame(minHeight: minRowHeight * CGFloat(repairCategory.repairs.count) * 1.25)
                    
                    TextField("Comments", text: $comments).font(Font.custom("InknutAntiqua-Regular", size: 14))
                }.frame(width: 350, alignment: .leading).padding(.trailing, 0)
                
            }
        }.onAppear() {
            repairsNeeded = initNeededRepairs(repairs: repairCategory.repairs)
//            repairTracker = initRepairTracker(repairs: repairCategory.repairs)
        }
    }
}

/// Sets and returns a Dictionary data structure with the keys representing the name of a repair and the value representing
///     whether or not it is needed
func initNeededRepairs(repairs: [AbstractCategory.Subcategory]) -> Dictionary<String, Bool> {
    var retVal = Dictionary<String, Bool>.init(minimumCapacity: repairs.count)
    
    for repair in repairs {
        retVal.updateValue(repair.needed, forKey: repair.name)
    }
    
    return retVal
}

///// Sets and returns a Dictionary data structure with the keys representing the name of a repair and the value representing
/////     whether or not it is needed
//func initRepairTracker(repairs: [AbstractCategory.Subcategory]) -> Dictionary<String, RepairData> {
//    var retVal = Dictionary<String, RepairData>.init(minimumCapacity: repairs.count)
//    
//    for repair in repairs {
//        let data = RepairData(needtorepair: repair.needed, total: repair.total,
//                              quantity: repair.quantity, costPerUnit: repair.costPerUnit)
//        retVal.updateValue(data, forKey: repair.name)
//    }
//    
//    return retVal
//}
//
//struct RepairData: Hashable {
//    var needtorepair: Bool
//    var total: Double
//    var quantity: Double
//    var costPerUnit: Double
//}


struct AbstractCategoryView_Previews: PreviewProvider {

    static var previews: some View {
        AbstractCategoryView(repairCategory: Roof.init(), repairsNeeded: Dictionary())
    }
}
