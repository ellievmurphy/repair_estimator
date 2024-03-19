import { useState } from "react";
import { View, StyleSheet, Button, Platform, Text } from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import moment from "moment";
import * as FileSystem from "expo-file-system";

function GenerateReportScreen({ navigation, route }) {
  const property = route.params.property;

  function getImage() {
    if (!property.imageUrl) {
      return "../assets/images/placeholder.png";
    }
    return property.imageUrl;
  }

  const html = `
    <html>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <title>Repair Estimator</title>
        </head>
        <style>
        @page {
        size: letter;
        margin: 0.5in;
        }
        @media print {
            .pagebreak {
            page-break-before: always;
            } /* page-break-after works, as well */

            footer {
              position: fixed;
              bottom: 0;
              left: 0;
            }
    
        }

        
        .header-container {
        display: flex;
        }
        .logo,
        .business-info {
        flex: 50%;
        }
        .img-logo {
        width: 200px;
        }
        .business-info {
        text-align: right;
        }
        .property-img {
        display: block;
        padding-top: 50px;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 250px
        }
        .main-content {
        flex: 1;
        text-align: center;
        }
        .inspection-date {
        color: rgb(145, 145, 145);
        }
        .toc-header,
        .inspection-detail {
        text-align: center;
        }
    </style>
    <body>
        <header>
        <div class="header-container">
            <div class="logo">
            <img
                class="img-logo"
                src="https://github.com/ellievmurphy/repair_estimator/blob/generate_report/EstimatorNative/assets/Shamrock-Homes-logo.png?raw=true"
            />
            </div>
            <div class="business-info">
            Shamrock Homes LLC <br />
            720-949-6454 <br />
            <a href="info@shamrockhomes.us">info@shamrockhomes.us</a> <br />
            <a href="http://www.shamrockhomes.us/">www.shamrockhomes.us</a>
            </div>
        </div>
        </header>

        <img
        id="property-img"
        class="property-img"
        src="${getImage()}"
        />
        <div class="main-content">
        <br />
        INSPECTION REPORT BY SHAMROCK HOMES
        
        <div>
          <br />
          Type of property: ${property.type}
            <br />
            ${property.streetAddress} <br />
            ${property.city}, STATE ${property.zip} <br />
        </div>
        <div class="inspection-date"><br />${moment(property.date).format(
          "MMMM DD, YYYY"
        )}</div>
        </div>

        <hr />

        <div class="main-content">
        <div class="inspection-date"><br />Inspector</div>
        <div>
            ${property.inspector} <br />
            (303) 910-1787 <br />
            <a href="brooks@shamrockhomes.us">brooks@shamrockhomes.us</a> <br />
            <a href="brooks.ohearn@exprealty.com">brooks.ohearn@exprealty.com</a>
        </div>
        </div>

        <div class="pagebreak"> </div>

        <div>
        <h1 class="toc-header">TABLE OF CONTENTS</h1>
        <section>insert table of contents here</section>
        </div>

        <div class="pagebreak"></div>

        <h1 class="inspection-detail">Insepection Detail</h1>
        <p>
        <h3>Purpose and Scope</h3>
        The repair estimate is supplemental to the Property Disclosure. It is the responsibility of the
        Buyer to obtain any and all disclosure forms relative to this real estate transaction. This
        document was prepared as a report of all visual defects noted at the time and date of the repair
        estimate. It is not necessarily an all-inclusive summary, as additional testing or inspection
        information/processes and analysis may be pending. It is subject to further information or
        detailed quotes from licensed contractors.
        It should be noted that a standard repair estimate is a visual assessment of the condition of the
        property at the time of estimate. The repair estimate is offered as an opinion only, of items

        observed on the day of the estimate. Although every reasonable effort is made to discover and
        correctly interpret indications of previous or ongoing defects that may be present, it must be
        understood that no guarantee is expressed nor implied nor responsibility assumed by the
        inspector or inspection company. This firm endeavors to use decades of knowledge and past
        experience with property renovations to create the repair estimate.
        
        <h3>General Disclosures</h3>
        Investing in financial and real estate markets involves a substantial degree of risk. There can be
        no assurance that the investment objectives or potential returns described herein will be
        achieved. Past performance is no guarantee of future performance or that such investment
        opportunities will become available.
        Assumptions relating to the repair estimates or proposed renovations involve judgments with
        respect to, among other things, future economic, political and competitive market conditions,
        all of which are difficult or impossible to predict accurately and many of which are beyond the
        control of Shamrock Homes LLC. Although Shamrock Homes LLC believes that the assumptions
        underlying the forward‐looking statements are reasonable, any of the assumptions could prove
        inaccurate and, therefore, there can be no assurance that the forward‐looking statements
        included in these materials will prove to be accurate. In light of the significant uncertainties
        inherent in the forward‐looking statements included herein, the inclusion of such information
        should not be regarded as a representation by Shamrock Homes LLC and/or its affiliates, any
        placement agent, or any other person, that the objectives and strategies of the Shamrock
        Homes LLC will be achieved.
        These materials are not intended to be solely relied upon as the basis for any investment
        decision, and is not, and should not be assumed to be, complete. The contents herein are not to
        be construed as legal, business, or tax advice, and each party that receives these materials
        should consult its own attorney, business advisor, and tax advisor as to legal, business, and tax
        advice. In considering any performance information contained herein, parties should bear in
        mind that past performance is not necessarily indicative of future results.
      </p>

      <div class="pagebreak"></div>
      
      <p>
        <h3>Limitations</h3>
        This is not the assessment of a professional engineer or licensed contractor. Despite all efforts,
        there is no way we can provide a guaranty of any elements of the house are sound. We always
        recommend further evaluations by licensed contractors or relevant engineers who can provide
        quotes for work to be completed.
        This repair estimate is limited to the structure, exterior, landscape, roof, plumbing, electrical,
        heating, foundation, bathrooms, kitchen, bedrooms, hallway, and attic sections of the house as
        requested, where sections are clearly accessible, and where components are clearly visible.
        Inspection of these components is limited, and is also affected by the conditions apparent at
        the time of the inspection, and which may, in the sole opinion of the inspector, be hazardous to
        examine for reasons of personal safety.

        This estimate will exclude insulation, hazardous materials, retaining walls, hidden defects,
        buried tanks of any type, areas not accessible or viewable. As all buildings contain some level of
        mold, inspecting for the presence of mold on surfaces, hidden locations, and in the air is not the
        responsibility of the inspector. Should the Buyer feel the need to perform testing and
        evaluation for the presence or absence of molds, Inspector recommends contacting a certified
        industrial hygienist or qualified laboratory testing service for these activities.
    </p>
    <footer>Shamrock Homes LLC 720-949-6454</footer>

    </body>
    </html>
    `;

  const [selectedPrinter, setSelectedPrinter] = useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  return (
    <View style={styles.container}>
      <Button title="Print" onPress={print} />
      <View style={styles.spacer} />
      <Button title="Print to PDF file" onPress={printToFile} />
      {Platform.OS === "ios" && (
        <>
          <View style={styles.spacer} />
          <Button title="Select printer" onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text
              style={styles.printer}
            >{`Selected printer: ${selectedPrinter.name}`}</Text>
          ) : undefined}
        </>
      )}
    </View>
  );
}

export default GenerateReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    flexDirection: "column",
    padding: 8,
  },
  spacer: {
    height: 8,
  },
  printer: {
    textAlign: "center",
  },
});
