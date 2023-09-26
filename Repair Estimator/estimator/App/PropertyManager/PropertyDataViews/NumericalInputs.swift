//
//  BedandBathView.swift
//  estimator
//
//  Created by Ellie Murphy on 9/15/23.
//

import SwiftUI
import Combine

struct BedandBathView: View {
    let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
    let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
    let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
    
    @Binding var beds: String
    @Binding var baths: String
    @Binding var sqft: String
    var body: some View {
        HStack { // Row containing Number of Beds and Baths
            VStack(alignment: .leading) {
                // Label for number of bedrooms
                Text("Beds")
                    .foregroundColor(.black)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .padding(.top)
                    .frame(height: 25)
                TextField("Beds", text: $beds)
                    .keyboardType(.numberPad)
                    .onReceive(Just(beds)) { newVal in
                        // ensures input only contains numbers -> might need to move into a .onReceive field
                        // src: https://stackoverflow.com/questions/58733003/how-to-create-textfield-that-only-accepts-numbers
                        let filtered = newVal.filter{ "0123456789".contains($0)}
                        if filtered != newVal { beds = filtered }
                        // insert setter here
                    }.frame(width: 120, height: 50)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.black, lineWidth: 1))
            }.padding(.trailing, 50)
            VStack(alignment: .leading) {
                // Label for number of bathrooms
                Text("Baths")
                    .foregroundColor(.black)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .padding(.top)
                    .frame(height: 25)
                TextField("Baths", text: $baths)
                    .keyboardType(.numberPad)
                    .onReceive(Just(baths)) { newVal in
                        // ensures input only contains numbers
                        let filtered = newVal.filter{ "0123456789.".contains($0)}
                        if filtered != newVal { baths = filtered }
                        // insert setter here
                    }.frame(width: 120, height: 50)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.black, lineWidth: 1))
                    .keyboardType(.numberPad)
            }
            
            // Label for square footage of property
            Text("Sq. Ft.")
                .foregroundColor(.black)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .padding(.top)
                .frame(height: 25)
            TextField("Sq. Ft.", text: $sqft)
                .keyboardType(.numberPad)
                .onReceive(Just(sqft)) { newVal in
                // ensures input only contains numbers
                let filtered = newVal.filter{ "0123456789.".contains($0)}
                if filtered != newVal { sqft = filtered }
                // insert setter here
            }.frame(width: 300, height: 50)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .overlay(RoundedRectangle(cornerRadius: 8)
                    .stroke(Color.black, lineWidth: 1))
        }
    }
}

//struct BedandBathView_Previews: PreviewProvider {
//    static var previews: some View {
//        BedandBathView()
//    }
//}
