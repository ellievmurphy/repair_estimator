//
//  CategoriesView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/24/23.
//

import SwiftUI
import PDFKit
import UniformTypeIdentifiers

@available(iOS 17.0, *)
struct CategoriesView: View {
    
//    @State var path: NavigationPath = .init()
    @State var property: Property
    @State private var showingExporter = false
    @State var cost = 0.0
    
    let pdfURL = Bundle.main.url(forResource: "Repair Estimator", withExtension: "pdf")
    
    var body: some View {
        let color1 = Color(red: 90/255, green: 109/255, blue: 93/255) //green
//        let color2 = Color(red: 245/255, green: 245/255, blue: 244/255) //light grey
//        let color3 = Color(red: 123/255, green: 133/255, blue: 140/255) //dark grey
        let formattedTotal = String(format: "%.2f", cost)
        
        // calls function to initialize the exterior categories
        let exteriors = initExtCategories()
        let interiors = initIntCategories()
        let mechanicals = initMecCategories()
        let others = initOthCategories()
            
        ZStack(alignment: Alignment(horizontal: .leading, vertical: .top)) {
            GeometryReader { geometry in
                VStack(alignment: .leading) {
                    Text("Estimator")
                        .frame(height: 70)
                        .foregroundStyle(color1)
                        .font(Font.custom("InknutAntiqua-Regular", size: 40))
                        .padding([.top, .trailing, .leading])
                    Text("Select Category | Total: \(formattedTotal)")
                        .font(Font.custom("InknutAntiqua-Regular", size: 16))
                        .padding([.trailing, .leading])
                    
                    // Prints the list of repair categories
                    List {
                        // Lists all the exterior repair categories
                        Section(header: Text("Exterior").font(Font.custom("InknutAntiqua-Regular", size: 16))) {
                            ForEach(exteriors) { category in
                                NavigationLink(category.type,
                                               destination: AbstractCategoryView(repairCategory: category))
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            }
                        }
                        // Lists all the interior repair categories
                        Section(header: Text("Interior").font(Font.custom("InknutAntiqua-Regular", size: 16))) {
                            ForEach(interiors) { category in
                                NavigationLink(category.type,
                                               destination: AbstractCategoryView(repairCategory: category))
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            }
                        }
                        // Lists all the mechanical repair categories
                        Section(header: Text("Mechanical").font(Font.custom("InknutAntiqua-Regular", size: 16))) {
                            ForEach(mechanicals) { category in
                                NavigationLink(category.type,
                                               destination: AbstractCategoryView(repairCategory: category))
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            }
                        }
                        // Lists all the other repair categories
                        Section(header: Text("Other").font(Font.custom("InknutAntiqua-Regular", size: 16))) {
                            ForEach(others) { category in
                                NavigationLink(category.type,
                                               destination: AbstractCategoryView(repairCategory: category))
                                .font(Font.custom("InknutAntiqua-Regular", size: 14))
                            }
                        }
                        
                    }.listStyle(PlainListStyle())
                    
                    Section {
                        NavigationLink("Generate Report") {
                            PDFKitView(url: pdfURL ?? URL(filePath: "../../Resources"))
                        }
                        .font(Font.custom("InknutAntiqua-Regular", size: 14))
                        .padding(.leading)
                        
                    }
                    
                }
                
                // TODO: Pop-up menu if picture hasn't been taken, gives opportunity to take one now
                
            }
        }
                
            
//        }
    }
}

func initExtCategories() -> [AbstractCategory] {
    // declare the list of exterior abstract categories (roof, gutters, etc.)
    var exCategories = [AbstractCategory]()
    
    // add exterior categories to exCategories
    exCategories.append(Roof())
    exCategories.append(Gutters())
    exCategories.append(Finish())
    exCategories.append(Masonry())
    exCategories.append(ExtPainting())
    exCategories.append(Windows())
    exCategories.append(Garage())
    exCategories.append(Landscaping())
    exCategories.append(ConcreteAsphalt())
    exCategories.append(Decks())
    exCategories.append(Pergola())
    exCategories.append(Fence())
    exCategories.append(Pool())
    exCategories.append(Septic())
    
    return exCategories
}

func initIntCategories() -> [AbstractCategory] {
    // declare the list of interior abstract categories (foundation, basement, etc.)
    var intCategories = [AbstractCategory]()
    
    // add interor categories to intCategories
    intCategories.append(IntPainting())
    intCategories.append(Hardwood())
    intCategories.append(CarpetVinyl())
    intCategories.append(Tiling())
    intCategories.append(KitchenGrouped())
    intCategories.append(AppliancesGrouped())
    intCategories.append(KitchenItem())
    intCategories.append(BathroomGrouped())
    intCategories.append(BathroomItem())
    intCategories.append(Framing())
    intCategories.append(Insulation())
    intCategories.append(Walls())
    intCategories.append(DoorsTrim())
    intCategories.append(Basement())
    intCategories.append(HomeFoundation())
    
    return intCategories
}

func initMecCategories() -> [AbstractCategory] {
    // declare the list of mechanical abstract categories (HVAC, plumbing, electrical)
    var mecCategories = [AbstractCategory]()
    
    // add mechanical categories to mecCategories
    mecCategories.append(HVAC())
    mecCategories.append(Plumbing())
    mecCategories.append(Electrical())
    
    return mecCategories
}

func initOthCategories() -> [AbstractCategory] {
    // declare the list of other abstract categories (demo, permits, etc.)
    var othCategories = [AbstractCategory]()
    
    // add other categories to othCategories
    othCategories.append(DemoDumpster())
    othCategories.append(TermitesAbatement())
    othCategories.append(Permits())
    othCategories.append(Staging())
    
    return othCategories
}

func createPDF() -> Data {
    // create UIGraphicsPDFRendererFormat object to provide PDF document metadata such
    // as author, etc.
    let format = UIGraphicsPDFRendererFormat()
    let metaData = [
        kCGPDFContextTitle: Property.instance.get_address(),
        kCGPDFContextAuthor: Property.instance.inspector,
        kCGPDFContextCreator: "Repair Estimator"
      ]
    format.documentInfo = metaData as [String: Any]
    
    // calculate PDF page dimensions
    // PDF documents use a default resolution of 72 DPI
    // US Letter
    // Width: 8.5 inches * 72 DPI = 612 points
    // Height: 11 inches * 72 DPI = 792 points
    // A4 would be [W x H] 595 x 842 points
    
    let pageRect = CGRect(x: 0, y: 0, width: 595, height: 842)
    let renderer = UIGraphicsPDFRenderer(bounds: pageRect,
                                         format: format)
    // Perform the drawing onto PDF here
    let data = renderer.pdfData { (context) in
        context.beginPage() // starts new PDF page
        
        // Created new NSParagraphStyle object to add .center alignment to the text.
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.alignment = .center
        
        // Creates attributes dictionary containing font and paragraph style.
        let attributes = [
            NSAttributedString.Key.font: UIFont.boldSystemFont(ofSize: 14),
            NSAttributedString.Key.paragraphStyle: paragraphStyle
        ]
        let text = Property.instance.to_string() // text in PDF
        
        // Created textRect struct describing specific rect where the text would be drawn.
        let textRect = CGRect(x: 50, // left margin
                            y: 200, // top margin
                        width: 500,
                       height: 500)
        
        // Draw the image on the PDF page
        if let context = UIGraphicsGetCurrentContext(), let image = Property.instance.image {
            drawImage(context, image: image)
        }
        
        text.draw(in: textRect, withAttributes: attributes) // Called .draw method of string object.
        
        // Start new page where the repairs will be listed
        context.beginPage() // starts new PDF page
        let listedRepairs = Property.instance.list_repairs()
        listedRepairs.draw(in: textRect)
    }
    
    return data
}

/// Draws the provided image onto the PDF document
func drawImage(_ context: CGContext, image: UIImage) {
    let imgRect = CGRect(x: 200, y: 50, width: 200, height: 150)
    let image = UIImage(named: "placeholder-img")
    let cgImage = image?.cgImage
    
    context.draw(cgImage!, in: imgRect)
}

struct PDFKitView: UIViewRepresentable {
    let url: URL // new variable to get the URL of the document
    let property: Property = Property.instance
    
    func makeUIView(context: UIViewRepresentableContext<PDFKitView>) -> PDFView {
        // Creating a new PDFVIew and adding a document to it
        let pdfView = PDFView()
        debugPrint("in pdf: \(property)")
        pdfView.document = PDFDocument(data: createPDF())
        return pdfView
    }
    
    func updateUIView(_ uiView: PDFView, context: UIViewRepresentableContext<PDFKitView>) {
        // leave this empty as we don't need to update the PDF
    }
}

@available(iOS 17.0, *)
struct CategoriesView_Previews: PreviewProvider {
    static var previews: some View {
        CategoriesView(property: Property.instance)
        PDFKitView(url: Bundle.main.url(forResource: "Repair Estimator", withExtension: "pdf") ?? URL(filePath: "../../Resources"))
    }
}
