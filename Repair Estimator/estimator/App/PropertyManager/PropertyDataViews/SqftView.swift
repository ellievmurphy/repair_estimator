//
//  SqftView.swift
//  estimator
//
//  Created by Ellie Murphy on 9/15/23.
//

import SwiftUI

struct SqftView: View {
    
    @Binding var sqft: String
    var body: some View {
        // Label for square footage of property
        Text("Sq. Ft.")
            .foregroundColor(.black)
            .font(Font.custom("InknutAntiqua-Regular", size: 14))
            .padding(.top)
            .frame(height: 25)
        TextField("Sq. Ft.", value: $sqft, formatter: NumberFormatter()).onSubmit {
            // ensures input only contains numbers
            let filtered = sqft.filter{ "0123456789.".contains($0)}
            if filtered != sqft { sqft = filtered }
            // insert setter here
        }.frame(width: 300, height: 50)
            .font(Font.custom("InknutAntiqua-Regular", size: 14))
            .overlay(RoundedRectangle(cornerRadius: 8)
                .stroke(Color.black, lineWidth: 1))
    }
}

//struct SqftView_Previews: PreviewProvider {
//    static var previews: some View {
//        SqftView()
//    }
//}
