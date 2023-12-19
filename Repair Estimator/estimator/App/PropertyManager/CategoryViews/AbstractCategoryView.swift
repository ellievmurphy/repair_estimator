//
//  AbstractCategoryView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/25/23.
//

import SwiftUI
import UIKit

@available(iOS 17.0, *)
struct AbstractCategoryView: View {
    @Environment(\.defaultMinListRowHeight) var minRowHeight
    @State var repairCategory: AbstractCategory
    @State var isNeeded: Bool = false
    @State var total: Double = 0.0
    @State var comments: String = ""
    
    // ----------- Create dynamic states ------------- //
    @State var quantity: String = ""
    @State private var numRepairs: Int = 1
    @State private var repairCosts: Array<String> = Array()
    // ---------------------------------------------- //
    
    var body: some View {
        //        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        //        let color2 = Color(red: 245/255, green: 245/255, blue: 2414/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        
        
        
        ZStack(alignment: Alignment(horizontal: .center, vertical: .top)) {
            GeometryReader{ geometry in
                VStack {
                    Section { // Contains title, needed boolean, and list of repairs
                        Text("\(repairCategory.type)")
                            .frame(height: 75)
                            .foregroundStyle(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 36))
                        
                        Toggle("Repair Needed?", isOn: $isNeeded)
                            .toggleStyle(.switch)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .frame(width:200)
                        
                        List(repairCategory.repairs) { repair in
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
                            
                            // TODO: add take picture option IF NO PICTURE TAKEN, PROMPT ON CLICK OF BACK BUTTON
                            // ^^ if repair is marked as needed
                        }.listStyle(.plain).frame(minHeight: minRowHeight * CGFloat(repairCategory.repairs.count) * 1.25)
                    }
                    
                    Spacer()
                    
                    Section { // Contains total cost, picture icon, and comments
                        VStack(alignment: .leading) {
                            HStack {
                                Text("Total Cost: $" + String(format: "%.2f", repairCategory.totalCost))
                                    .frame(height: 40)
                                    .foregroundStyle(color3)
                                    .font(Font.custom("InknutAntiqua-Regular", size: 25))
                                    .padding(.trailing, 0)
                                Spacer()
                                Button(action: {print("Button tapped!")}
                                ) {
                                    Image(systemName: "camera")
                                        .imageScale(.large)
                                        .foregroundColor(isNeeded ? .black : color3)
                                }
                                .disabled(!isNeeded)
                            }
                            // TODO: add picture icon to prompt to take pictures of repair
                            TextField("Comments", text: $comments).font(Font.custom("InknutAntiqua-Regular", size: 14))
                            
                        }
                    }
                }.frame(width: geometry.size.width > 0 ? geometry.size.width - 40 : 350, height: geometry.size.height, alignment: .leading)
                    .padding([.leading, .trailing], 20)
            }
            
        }.onAppear() {
            numRepairs = repairCategory.repairs.count
            isNeeded = repairCategory.needed
        }.onChange(of: isNeeded) {needed in
            repairCategory.needed = needed
            debugPrint(repairCategory.needed)
        }
    }
    
    func initRepairCosts(size: Int) -> Void {
        repairCosts = Array(repeating: "0", count: size)
        
    }
}

@available(iOS 17.0, *)
struct AbstractCategoryView_Previews: PreviewProvider {

    static var previews: some View {
        AbstractCategoryView(repairCategory: Roof.init())
        AbstractCategoryView(repairCategory: DemoDumpster.init())
    }
}
