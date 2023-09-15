//
//  CategoriesView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/24/23.
//

import SwiftUI

struct CategoriesView: View {
    
//    @State private var exterior: Bool = false
    var body: some View {
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        ScrollView {
            // Change background color to grey
            color2.ignoresSafeArea()
            
            ZStack(alignment: Alignment(horizontal: .leading, vertical: .top)) {
                VStack(alignment: .leading) {
                    Text("Estimator")
                        .frame(height: 90)
                        .foregroundStyle(color1)
                        .font(Font.custom("InknutAntiqua-Regular", size: 40))
                    Text("Select Category")
                        .font(Font.custom("InknutAntiqua-Regular", size: 16))
                    Group{
                        DisclosureGroup("Exterior") { // TODO: Consider abstracting these to another view
                            NavigationLink(destination: AbstractCategoryView()) {
                                Text("Roof")
                                    .font(Font.custom("InknutAntiqua-Regular", size: 16))
                            }
                        }.foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 16))
                        DisclosureGroup("Interior") {
                            NavigationLink(destination: AbstractCategoryView()) {
                                Text("Hardwood")
                                    .font(Font.custom("InknutAntiqua-Regular", size: 16))
                            }
                        }.foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 16))
                        DisclosureGroup("Mechanicals") {
                            NavigationLink(destination: AbstractCategoryView()) {
                                Text("HVAC")
                                    .font(Font.custom("InknutAntiqua-Regular", size: 16))
                            }
                        }.foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 16))
                        DisclosureGroup("Other") {
                            NavigationLink(destination: AbstractCategoryView()) {
                                Text("Demo + Dumpsters")
                                    .font(Font.custom("InknutAntiqua-Regular", size: 16))
                            }
                        }.foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 16))
                    }
                }.frame(width: 350, alignment: .leading)
            }
        }
    }
}

struct CategoriesView_Previews: PreviewProvider {
    static var previews: some View {
        CategoriesView()
    }
}
