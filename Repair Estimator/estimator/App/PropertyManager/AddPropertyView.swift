//
//  AddPropertyView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/21/23.
//

import SwiftUI

struct AddPropertyView: View {
    @State var property: Property
    
    @State private var street: String = ""
    @State private var city: String = ""
    @State private var zip: String = ""
    @State private var isVacant: Bool = false
    @State private var date: Date = Date.init()
    @State private var beds: String = ""
    @State private var baths: String = ""
    @State private var sqft: String = ""
    @State private var inspector: String = ""
    
    
    var body: some View {
        // have to divide each of the rgb values by 255 to create double values
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        ScrollView {
            // Change background color to grey
            color2.ignoresSafeArea()
            
            ZStack(alignment: Alignment(horizontal: .center, vertical: .top)) {
                // Holds Title and text boxes
                VStack(alignment: .leading) {
                    Text("New Estimate")
                        .frame(height: 75)
                        .foregroundStyle(color1)
                        .font(Font.custom("InknutAntiqua-Regular", size: 40))
                    
                    StreetAddressView(street: $street, city: $city, zip: $zip)
                    
                    HStack { // Row containing Vacancy and Date of inspection
                        Toggle("Vacant?", isOn: $isVacant)
                            .toggleStyle(.switch)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .frame(width:120)
                        DatePicker("Date", selection: $date, displayedComponents: .date)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.leading, 10)
                            .frame(width: 185)
                    }
                    
                    BedandBathView(beds: $beds, baths: $baths)
                    SqftView(sqft: $sqft)
                    InspectorView(inspector: $inspector)
                   
                    Button(
                        action: {
                            print(property.inspector)
                                
                        }, label: {
                            Text("Start Estimate") // make full width
                                .padding([.top, .bottom], 0)
                                .padding([.leading, .trailing], 70)
                                .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                .foregroundColor(color2)
                                .background(color1
                                    .cornerRadius(10)
                                    .shadow(color: .gray, radius: 5, x: 0, y: 3)
                                )
                        }
                    ).onSubmit {
                        // TODO: does this does not work properly and there are issues w loading the page??
                        
                        let retProperty = handleSubmit(street: street, city: city, zip: zip, isVacant: isVacant, date: date, beds: beds, baths: baths, sqft: sqft, inspector: inspector)
                        // TODO: prompts to take picture instead of separate button
                        // TODO: make full width
                        property = retProperty
                        print(property)
                    }
                    
                }.padding(.horizontal)
            }
            
        }
    }
}

func handleSubmit(street: String, city: String, zip: String, isVacant: Bool, date: Date, beds: String, baths: String, sqft: String, inspector: String) -> Property {
    let dBeds = convertDouble(str: beds)
    let dBaths = convertDouble(str: baths)
    let dSqft = convertDouble(str: sqft)
    // create property objects
    // TODO: prompt to take picture for profile shot of property
    // consider putting resulting image
    let property = Property.init(street: street, city: city, zip: zip, vacancy: isVacant, date: date, beds: dBeds, baths: dBaths, sqft: dSqft, inspector: inspector, totalCost: 0, repairs: [])
    return property
}

func convertDouble(str: String) -> Double {
    guard str.isEmpty == false else { return 0 }
    guard let double = Double(str) else { return 0 }
    return double
}

struct AddPropertyView_Previews: PreviewProvider {
    static var previews: some View {
        AddPropertyView(property: Property.init())
    }
}

