//
//  IntroductoryView.swift
//  estimator
//
//  Created by Ellie Murphy on 9/15/23.
//

import SwiftUI

struct IntroductoryView: View {
    
    @State var path: NavigationPath = .init()
    @State var property: Property
    
    var body: some View {
        // have to divide each of the rgb values by 255 to create double values
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255)
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255)
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255)
        
        NavigationStack {  // Wrapper that allows us to switch between Views
            ZStack {
                // Change background color to grey
                color2.ignoresSafeArea()
                
                // Holds Button and Estimator text
                VStack {
                    Text("Estimator").foregroundStyle(color1).font(Font.custom("InknutAntiqua-Regular", size: 48))
                    // NavLink indicates text that can be used to navigate views
                    NavigationLink("Create New", destination: AddPropertyView(property: Property.instance, path: path))
                        .padding([.top, .bottom], 0)
                        .padding([.leading, .trailing], 20)
                        .font(Font.custom("InknutAntiqua-Regular", size: 20))
                        .foregroundColor(color2)
                        .background(color3.cornerRadius(10)
                            .shadow(color: .gray, radius: 5, x: 0, y: 3))
                }
            }
        }
    }
}

//struct IntroductoryView_Previews: PreviewProvider {
//    static var previews: some View {
//        IntroductoryView(path: <#NavigationPath#>)
//    }
//}
