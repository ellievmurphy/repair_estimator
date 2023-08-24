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
                        .frame(height: 90)
                        .foregroundStyle(color1)
                        .font(Font.custom("InknutAntiqua-Regular", size: 40))
                    Group {
                        // Label for Street Address
                        Text("Street Address")
                            .foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.top)
                            .frame(height: 28)
                        TextField("Street Address", text: $street)
                            .onSubmit {
                                // insert setter here
                            }.frame(width: 300, height: 50)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.black, lineWidth: 1))
                    }
                    Group {
                        // Label for City
                        Text("City")
                            .foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.top)
                            .frame(height: 28)
                        TextField("City", text: $city).onSubmit {
                            // insert setter here
                        }.frame(width: 300, height: 50)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.black, lineWidth: 1))
                    }
                    Group {
                        // Label for Zip Code
                        Text("Zip Code")
                            .foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.top)
                            .frame(height: 28)
                        TextField("Zip Code", text: $zip).onSubmit {
                            // insert setter here
                        }.frame(width: 300, height: 50)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.black, lineWidth: 1))
                    }
                    
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
                    HStack { // Row containing Number of Beds and Baths
                        VStack(alignment: .leading) {
                            // Label for number of bedrooms
                            Text("Beds")
                                .foregroundColor(.black)
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                                .padding(.top)
                                .frame(height: 28)
                            TextField("Beds", value: $beds, formatter: NumberFormatter())
                                .onSubmit {
                                    // ensures input only contains numbers -> might need to move into a .onReceive field
                                    // src: https://stackoverflow.com/questions/58733003/how-to-create-textfield-that-only-accepts-numbers
                                    let filtered = beds.filter{ "0123456789".contains($0)}
                                    if filtered != beds { beds = filtered }
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
                                .frame(height: 28)
                            TextField("Baths", value: $baths, formatter: NumberFormatter())
                                .onSubmit {
                                    // ensures input only contains numbers
                                    let filtered = baths.filter{ "0123456789.".contains($0)}
                                    if filtered != baths { baths = filtered }
                                    // insert setter here
                                }.frame(width: 120, height: 50)
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                                .overlay(RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color.black, lineWidth: 1))
                                .keyboardType(.numberPad)
                        }
                        
                    }
                    Group {
                        // Label for square footage of property
                        Text("Sq. Ft.")
                            .foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.top)
                            .frame(height: 28)
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
                    Group {
                        // Label for Inspector
                        Text("Inspected By")
                            .foregroundColor(.black)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .padding(.top)
                            .frame(height: 28)
                        TextField("Inspected By", text: $inspector).onSubmit {
                            // insert setter here
                        }.frame(width: 300, height: 50)
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.black, lineWidth: 1))
                    }
                    HStack {
                        Button( // TODO: update how photo is taken -- consider condensing page
                            action: {
                                print(property.inspector)
                                
                            }, label: {
                                Text("Take Picture")
                                    .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                    .foregroundColor(color3)
                                    .padding(.trailing)
//                                    .background(color2
//                                        .cornerRadius(10)
//                                        .shadow(color: .gray, radius: 5, x: 0, y: 3)
//                                    )
                            }
                        )
                        
                        Button(
                            action: {
                                print(property.inspector)
                                
                            }, label: {
                                Text("Submit")
                                    .padding([.top, .bottom], 0)
                                    .padding([.leading, .trailing], 30)
                                    .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                    .foregroundColor(color2)
                                    .background(color1
                                        .cornerRadius(10)
                                        .shadow(color: .gray, radius: 5, x: 0, y: 3)
                                    )
                            }
                        ).onSubmit {
                            let success = handleSubmit(beds: beds, baths: baths, sqft: sqft)
                        }
                    }
                }.padding(.horizontal)
            }
            
        }
    }
}

func handleSubmit(beds: String, baths: String, sqft: String) -> Bool {
    let dBeds = convertDouble(str: beds)
    let dBaths = convertDouble(str: baths)
    let dSqft = convertDouble(str: sqft)
    // create property objects
    
    return true
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
