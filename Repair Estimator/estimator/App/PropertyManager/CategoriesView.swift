//
//  CategoriesView.swift
//  estimator
//
//  Created by Ellie Murphy on 8/24/23.
//

import SwiftUI
import PDFKit
import UniformTypeIdentifiers

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
        let exteriors = initCategories()
        
        ScrollView {
            // Change background color to grey
            //                color2.ignoresSafeArea()
            GeometryReader { geo in
                ZStack(alignment: Alignment(horizontal: .leading, vertical: .top)) {
                    
                    VStack(alignment: .leading) {
                        Text("Estimator")
                            .frame(height: 90)
                            .foregroundStyle(color1)
                            .font(Font.custom("InknutAntiqua-Regular", size: 40))
                        Text("Select Category | Total: \(formattedTotal)")
                            .font(Font.custom("InknutAntiqua-Regular", size: 16))
                        
                        ForEach(exteriors) { category in
                            NavigationLink(category.type,
                                           destination: AbstractCategoryView(repairCategory: category, repairsNeeded: Dictionary()))
                            .font(Font.custom("InknutAntiqua-Regular", size: 14))
                        } // probably remove the dictionary initializations + move them to initialize in-line w declaration in AbstractCategoryView
                        
                        
                    }
                    .frame(width: geo.size.width, alignment: .leading)
                    .padding()
                    
                    NavigationLink("Export", destination: PDFKitView(url: pdfURL ?? URL(filePath: "../../Resources"), property: property))
                        .padding()
                }
                
            }
        }
    }
}

func initCategories() -> [AbstractCategory] {
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
                            y: 100, // top margin
                        width: 500,
                       height: 500)

        text.draw(in: textRect, withAttributes: attributes) // Called .draw method of string object.
    }
    
    return data
}

struct PDFKitView: UIViewRepresentable {
    let url: URL // new variable to get the URL of the document
    let property: Property
    
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

struct CategoriesView_Previews: PreviewProvider {
    static var previews: some View {
        CategoriesView(property: Property.instance)
    }
}
