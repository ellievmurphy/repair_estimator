//
//  InspectorView.swift
//  estimator
//
//  Created by Ellie Murphy on 9/15/23.
//

import SwiftUI

struct InspectorView: View {
    
    @Binding var inspector: String
    var body: some View {
        // Label for Inspector
        Text("Inspected By")
            .foregroundColor(.black)
            .font(Font.custom("InknutAntiqua-Regular", size: 14))
            .padding(.top)
            .frame(height: 25)
        TextField("Inspected By", text: $inspector).onSubmit {
            // insert setter here
        }.frame(width: 300, height: 50)
            .font(Font.custom("InknutAntiqua-Regular", size: 14))
            .overlay(RoundedRectangle(cornerRadius: 8)
                .stroke(Color.black, lineWidth: 1))
    }
}

//struct InspectorView_Previews: PreviewProvider {
//    static var previews: some View {
//        InspectorView()
//    }
//}
