import { useState } from "react";
import { View, StyleSheet, Button, Platform, Text } from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

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

    img {
        width: 200px;
    }

    .header-container {
        display: flex;
    }
    .logo,
    .business-info {
        padding: 10px;
        flex: 50%;
    }
    .business-info {
        text-align: right;
    }
    .main-content {
        align-items: center;
        justify-content: center;
    }
    </style>
    <body>
        <header>
            <div class="header-container">
            <div class="logo">
                <img
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

        <div class="main-content">6000 Whitehurst Way, Raleigh, NC 27606</div>

        <footer>Shamrock Homes LLC 720-949-6454</footer>
    </body>
</html>
`;

function GenerateReportScreen({ navigation, route }) {
  const property = route.params.property;

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
