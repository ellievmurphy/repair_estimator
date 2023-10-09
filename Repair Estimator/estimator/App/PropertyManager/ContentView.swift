///
///  ContentView.swift
///  Utilizes the Property class to create new properties.
///  Main home screen for Estimator application
///
///  Created by Ellie Murphy on 8/9/23.
///
import SwiftUI
import Foundation

struct ContentView: View {
    var body: some View {
        IntroductoryView(path: NavigationPath(), property: Property.instance)
    }
}

//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView()
//    }
//}
