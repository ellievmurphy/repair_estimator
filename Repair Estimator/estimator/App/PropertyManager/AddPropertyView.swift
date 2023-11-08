//
//  AddPropertyView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/21/23.
//

import SwiftUI
import AVFoundation

struct AddPropertyView: View {
    @State var property: Property
    @State private var picTaken : Bool = false
    
    // Below are the fields required for taking and storing a picture
    @State var imageData: Data = .init(capacity: 0)
    @State var show = false
    @State var imagepicker = false
    @State var source : UIImagePickerController.SourceType = .camera
    
    // Below are the fields required for creating a Property object
    @State private var street: String = Property.instance.address.street
    @State private var city: String = Property.instance.address.city
    @State private var zip: String = Property.instance.address.zip
    @State private var isVacant: Bool = Property.instance.vacancy
    @State private var date: Date = Date.init()
    @State private var beds: String = ""
    @State private var baths: String = ""
    @State private var sqft: String = ""
    @State private var inspector: String = "Ellie" //placeholder
//    @State private var profile: Image
    
    @State var path: NavigationPath
    
    var body: some View {
        // have to divide each of the rgb values by 255 to create double values
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
//        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        
        NavigationStack(path: $path) {
            ScrollView {
                // Change background color to grey
                color2.ignoresSafeArea()
                
                ZStack(alignment: Alignment(horizontal: .leading, vertical: .top)) {
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
                        
                        NumericalInputs(beds: $beds, baths: $baths, sqft: $sqft)
                        //                    InspectorView(inspector: $inspector)
                        Button(
                            action: {
                                // TODO: prompts to take picture instead of separate button
                                
//                                let _ = print(property.to_string())
                                if !picTaken {
                                    picTaken = true
                                    path.append("Take Picture")
                                } else {
                                    path.append("Add Property")
                                }
                                //
                            }, label: {
                                if picTaken {
                                    Text("Start Estimate") // make full width
                                        .padding([.top, .bottom], 0)
                                        .padding([.leading, .trailing], 70)
                                        .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                        .foregroundColor(color2)
                                        .background(color1
                                            .cornerRadius(10)
                                            .shadow(color: .gray, radius: 5, x: 0, y: 3)
                                        )
                                    
                                } else {
                                    Text("Take Picture") // make full width
                                        .padding([.top, .bottom], 0)
                                        .padding([.leading, .trailing], 70)
                                        .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                        .foregroundColor(color2)
                                        .background(color1
                                            .cornerRadius(10)
                                            .shadow(color: .gray, radius: 5, x: 0, y: 3)
                                        )
                                }
                                
                            }
                        )
                        
                    }.padding(.horizontal)
                }
            }.navigationDestination(for: String.self) { string in
                switch string {
                    case "Take Picture":
                        
                        ImagePicker(show: $imagepicker, image: $imageData, source: source)
//                        let _ = print(imageData) // yeah... debugs maybe
                    case "Add Property":
    //                  let _ = print(property.to_string())
                        let _ = print(Property.instance.address.street)
                        
                        CategoriesView(property: handleSubmit(street: street,
                                                              city: city,
                                                              zip: zip,
                                                              isVacant: isVacant,
                                                              date: date,
                                                              beds: beds,
                                                              baths: baths,
                                                              sqft: sqft,
                                                              inspector: inspector))
                default:
                    Text("No view with name: \(string)")
                }
            
            }
        }
    }
    
}

/// Initializes singleton Property instance
func handleSubmit(street: String, city: String, zip: String, isVacant: Bool, date: Date, beds: String, baths: String, sqft: String, inspector: String) -> Property {
    let dBeds = convertDouble(str: beds)
    let dBaths = convertDouble(str: baths)
    let dSqft = convertDouble(str: sqft)
    // create property objects
    // TODO: prompt to take picture for profile shot of property
    // consider putting resulting image
    Property.instance.set_address(street: street, city: city, zip: zip)
    Property.instance.set_vacancy(vacancy: isVacant)
    Property.instance.set_date(date: date)
    Property.instance.set_beds(beds: dBeds)
    Property.instance.set_baths(baths: dBaths)
    Property.instance.set_sqft(sqft: dSqft)
    Property.instance.set_inspector(inspector: inspector)
    Property.instance.set_repairs(repairs: [])
//
//    let property = Property.init(street: street, city: city, zip: zip, vacancy: isVacant, date: date, beds: dBeds, baths: dBaths, sqft: dSqft, inspector: inspector, totalCost: 0, repairs: [])
    return Property.instance
}

func convertDouble(str: String) -> Double {
    guard str.isEmpty == false else { return 0 }
    guard let double = Double(str) else { return 0 }
    return double
}

struct ImagePicker : UIViewControllerRepresentable {
    @Binding var show : Bool
    @Binding var image : Data
    var source : UIImagePickerController.SourceType
    
    func makeCoordinator() -> ImagePicker.Coordinator {
        return ImagePicker.Coordinator(parent1: self)
    }
    
    func makeUIViewController(context: UIViewControllerRepresentableContext<ImagePicker>) -> UIImagePickerController {
        let controller = UIImagePickerController()
        controller.sourceType = source
        controller.delegate = context.coordinator
        return controller
    }
    
    func updateUIViewController(_ uiViewController: UIImagePickerController, context: UIViewControllerRepresentableContext<ImagePicker>) {
        
    }
    
    class Coordinator: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
        var parent : ImagePicker
        
        init(parent1 : ImagePicker) {
            parent = parent1
        }
        
        func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
            self.parent.show.toggle()
        }
        
        func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
            let image = info[.originalImage] as! UIImage
            let data = image.pngData()
            self.parent.image = data!
            self.parent.show.toggle()
        }
    }
}

//struct AddPropertyView_Previews: PreviewProvider {
//    static var previews: some View {
//        AddPropertyView(property: Property.init())
//    }
//}

