//
//  ContentView.swift
//  Utilizes the Property class to create new properties.
//  Main home screen for Estimator application
//
//  Created by Ellie Murphy on 8/9/23.
//
import SwiftUI

struct ContentView: View {
    var property: Property
    
    var body: some View {
        // have to divide each of the rgb values by 255 to create double values
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255)
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255)
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255)
        ZStack {
            // Change background color to grey
            color2.ignoresSafeArea()
            
            // Holds Button and Estimator text
            VStack {
                Text("Estimator").foregroundStyle(color1).font(Font.custom("InknutAntiqua-Regular", size: 48))
                Button(
                    action: {
                        print(property.inspector)
                        
                    }, label: {
                        Text("Create New")
                            .padding([.top, .bottom], 0)
                            .padding([.leading, .trailing], 20)
                            .font(Font.custom("InknutAntiqua-Regular", size: 20))
                            .foregroundColor(color2)
                            .background(color3
                                .cornerRadius(10)
                                .shadow(color: .gray, radius: 5, x: 0, y: 3)
                            )
                    }
                )
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(property: Property.init())
    }
}
