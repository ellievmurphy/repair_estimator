//
//  AddPropertyView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/21/23.
//

import SwiftUI
import AVFoundation
import PopupView

@available(iOS 17.0, *)
struct AddPropertyView: View {
    @State var property: Property
    @State private var noPicTaken : Bool = false
    @State private var camOpened : Bool = false
    
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
    
    var body: some View {
        // have to divide each of the rgb values by 255 to create double values
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        
        NavigationStack {
            ScrollView {
                // Change background color to grey
//                color2.ignoresSafeArea()
                
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
                        
                        HStack {
                            Button(action: {
                                camOpened = true
                                if UIImage(#imageLiteral(resourceName: "placeholder-img.png")) == Property.instance.image {
                                    noPicTaken = true
                                }
                            }) {
//                                NavigationLink("Take Photo", destination: ImagePicker(show: $imagepicker, image: $imageData, source: source))
                                Text("Take Photo")
                                    .padding([.top, .bottom], 5)
                                    .padding([.leading, .trailing], 20)
                                    .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                    .foregroundColor(color2)
                                    .background(color1
                                        .cornerRadius(10)
                                        .shadow(color: .gray, radius: 5, x: 0, y: 3)
                                    )
                            }
                            
                            // TODO: add error message that picture has to be taken first if one hasn't been already
                            
                            NavigationLink("Start Estimate", destination: CategoriesView(property: handleSubmit(street: street, city: city, zip: zip, isVacant: isVacant, date: date, beds: beds, baths: baths, sqft: sqft, inspector: inspector)))
                                .padding([.top, .bottom], 5)
                                .padding([.leading, .trailing], 10)
                                .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                .foregroundColor(color3)
                            
                        }
                        
                        
                    }
                    //
                    if camOpened && noPicTaken {
                        GeometryReader{ geometry in
                            VStack {
                                Text("Should add photo first").font(Font.custom("InknutAntiqua-Regular", size: 20))
                                
                                //TODO: change to buttons instead of links
                                HStack{
                                    Button("Skip") {
                                        noPicTaken = false
                                    }
                                    .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                    .foregroundColor(color1)
                                    .padding([.trailing], 10)
                                    
                                    
                                    NavigationLink("Take Photo", destination: ImagePicker(show: $imagepicker, image: $imageData, source: source))
                                        .font(Font.custom("InknutAntiqua-Regular", size: 20))
                                        .foregroundColor(color1)
                                    
                                    
                                }
                            }
                            .frame(width: geometry.size.width * 0.75, height: geometry.size.height * 0.25)
                            .background(color2.opacity(0.75))
                            .cornerRadius(8.0)
                            .shadow(color: .gray, radius: 5)
                            .position(x: geometry.size.width / 2, y:geometry.size.height / 2)
                            
                        }
                    }
                    
                }.padding(.horizontal)
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
    Property.instance.set_repairs(repairs: Property.instance.initRepairs()) // TODO: I don't like how this is done, prob a better way
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

struct AddPropertyView_Previews: PreviewProvider {
    static var previews: some View {
        if #available(iOS 17.0, *) {
            AddPropertyView(property: Property.instance)
        } else {
            // Fallback on earlier versions
        }
    }
}

