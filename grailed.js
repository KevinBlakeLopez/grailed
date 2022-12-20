// kevin was here

const brandsgateway = SpreadsheetApp.getActive().getSheetByName(
  "brandsgateway-inventory"
);
const grailed = SpreadsheetApp.getActive().getSheetByName("grailed-inventory");

const link =
  "https://brandsgateway.com//wp-json/wc-brandsgateway/v1/dropshipping-catalog/?api_key=BP5J4SRL7z8w74nv4TRX&&lang=en&format=csv&download=1";

const conversion = convertEUtoUS();

function fetchMapCSV() {
  // grailed.clear();
  let response = UrlFetchApp.fetch(link).getContentText();
  const brandsGatewayInventory = Utilities.parseCsv(response);


  brandsGatewayInventory.shift();

  const grailedInventory = brandsGatewayInventory
    .slice(0, 1000)
    .filter(
      (row) =>
        row[0].trim().toLowerCase() !== "parent" &&
        (row[16].trim().toLowerCase() === "men" || row[16].trim().toLowerCase() === "women")
    )
    .map((row) => {
      if (row[16].trim().toLowerCase() === "men") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
         "original  size on tag: " + row[19] + "\n" + row[27],
          createOptionsArray(convertCategories(htmlEntities(row[18].trim().toLowerCase()), row[16].trim().toLowerCase(), row[17].trim().toLowerCase()) + "." + convertSubCategories(htmlEntities(row[18]).trim().toLowerCase(), row[16].trim().toLowerCase(), row[6].trim().toLowerCase(), row[27].trim().toLowerCase())),
          htmlEntities(row[5]),
          null,
          null,
          findMatches({
          id: row[3],
          gender: row[16].trim().toLowerCase(),
          category: htmlEntities(row[17].trim().toLowerCase()),
          subCategory: htmlEntities(row[18].trim().toLowerCase()),
          size: row[19],
          description: htmlEntities(row[27].trim().toLowerCase())
        }),
          null,
          "new",
          row[21].toLowerCase(),
          Math.round(wholesaleMarkup(row[8] * conversion) / 10) * 10,
          htmlEntities(row[5].replace(/\s/g, "").toLowerCase()),
          row[13],
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ];
      } else if (row[16].trim().toLowerCase() === "women") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
          "original size on tag: " + row[19] + "\n" + row[27],
          createOptionsArray("womens_" + convertCategories(htmlEntities(row[18].trim().toLowerCase()), row[16].trim().toLowerCase(), row[17].trim().toLowerCase()) + "." + convertSubCategories(htmlEntities(row[18]).trim().toLowerCase(), row[16].trim().toLowerCase(), row[6].trim().toLowerCase(), row[27].trim().toLowerCase())),
          htmlEntities(row[5]),
          null,
          null,
          null,
          findMatches({
          id: row[3],
          gender: row[16].trim().toLowerCase(),
          category: htmlEntities(row[17].trim().toLowerCase()),
          subCategory: htmlEntities(row[18].trim().toLowerCase()),
          altCat: convertCategories(htmlEntities(row[18].trim().toLowerCase())),
          size: row[19],
          description: htmlEntities(row[27].trim().toLowerCase())
          }),
          "new",
          row[21].toLowerCase(),
          Math.round(wholesaleMarkup(row[8] * conversion) / 10) * 10,
          htmlEntities(row[5].replace(/\s/g, "").toLowerCase()),
          row[13],
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ];
      }
    });


  let startRow = 2;
  let startCol = 1;
  let numRows = grailedInventory.length;
  let numColumns = grailedInventory[0].length;

  // Appends data into the sheet.
  grailed
    .getRange(startRow, startCol, numRows, numColumns)
    .setValues(grailedInventory);
  // const categoryColumn = grailed.getRange("E2:E");
  // console.log(categoryColumn.getValues());

// var cell = SpreadsheetApp.getActive().getRange('A1');
// const rule = SpreadsheetApp.newDataValidation().requireValueInList(categoryColumn.getValues().forEach(arr => Array.isArray(arr[0])) ? arr[0]: false).build();
// categoryColumn.setDataValidation(rule);
  
}
