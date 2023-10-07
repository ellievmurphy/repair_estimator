//
//  AbstractCategoryView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/25/23.
//

import SwiftUI
import UIKit

struct AbstractCategoryView: View {
    
    @State var isNeeded: Bool = false
    var body: some View {
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        
        ScrollView {
            ZStack(alignment: Alignment(horizontal: .leading, vertical: .top)) {
                VStack {
                    HStack {
                        Text("Roof:")
                            .frame(height: 75)
                            .foregroundStyle(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 36))
                            .padding(.trailing, 60)
                        
                        Text("$6000")
                            .frame(height: 75)
                            .foregroundStyle(color3)
                            .font(Font.custom("InknutAntiqua-Regular", size: 36))
                            .padding(.trailing, 0)
                        
                    }
                    Toggle("Repair Needed?", isOn: $isNeeded)
                        .toggleStyle(.switch)
                        .font(Font.custom("InknutAntiqua-Regular", size: 14))
                        .frame(width:200)
                    
                    
                }.frame(width: 350, alignment: .leading).padding(.trailing, 0)
                
            }
        }
    }
    
}

//struct AbstractCategoryView_Previews: PreviewProvider {
//
//    static var previews: some View {
//        AbstractCategoryView()
//    }
//}
