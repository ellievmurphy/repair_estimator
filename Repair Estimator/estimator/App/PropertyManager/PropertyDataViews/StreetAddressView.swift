//
//  StreetAddress.swift
//  estimator
//
//  Created by Ellie Murphy on 9/15/23.
//

import SwiftUI

public struct StreetAddressView: View {
    let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
    let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
    let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
    
    @Binding var street: String
    @Binding var city: String
    @Binding var zip: String
    public var body: some View {
        VStack(alignment: .leading) {
            
            // Label for Street Address
            Text("Street Address")
                .foregroundColor(.black)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .padding(.top)
                .frame(height: 25)
            TextField("Street Address", text: $street)
                .onSubmit {
                    //set street
                }.frame(width: 300, height: 50)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .overlay(RoundedRectangle(cornerRadius: 8)
                    .stroke(Color.black, lineWidth: 1))
            
            // Label for City
            Text("City")
                .foregroundColor(.black)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .padding(.top)
                .frame(height: 25)
            TextField("City", text: $city).onSubmit {
                // insert setter here
            }.frame(width: 300, height: 50)
                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                .overlay(RoundedRectangle(cornerRadius: 8)
                    .stroke(Color.black, lineWidth: 1))
                
            // Label for Zip Code
                Text("Zip Code")
                    .foregroundColor(.black)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .padding(.top)
                    .frame(height: 25)
                TextField("Zip Code", text: $zip).onSubmit {
                    // insert setter here
                }.frame(width: 300, height: 50)
                    .font(Font.custom("InknutAntiqua-Regular", size: 14))
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.black, lineWidth: 1))
        }
    }
}

//struct StreetAddressView_Previews: PreviewProvider {
//    static var previews: some View {
//        StreetAddressView(street: <#Binding<String>#>, city: <#Binding<String>#>, zip: <#Binding<String>#>)
//    }
//}
