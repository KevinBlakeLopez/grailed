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
        row[0].toLowerCase() !== "parent" &&
        (row[16].toLowerCase() === "men" || row[16].toLowerCase() === "women")
    )
    .map((row) => {
      if (row[16].toLowerCase() === "men") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
          "original size on tag: " + row[19] + "\n" + row[27],
          convertCategories(htmlEntities(row[18].toLowerCase()), row[16].toLowerCase()) + "." + convertSubCategories(htmlEntities(row[18]).toLowerCase(), row[16].toLowerCase(), row[6].toLowerCase(), row[27].toLowerCase()),
          htmlEntities(row[5]),
          null,
          null,
          findMatches({
          id: row[3],
          gender: row[16].toLowerCase(),
          category: htmlEntities(row[17].toLowerCase()),
          subCategory: htmlEntities(row[18].toLowerCase()),
          size: row[19],
          description: htmlEntities(row[27].toLowerCase())
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
      } else if (row[16].toLowerCase() === "women") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
          "original size on tag: " + row[19] + "\n" + row[27],
          "womens_" + convertCategories(htmlEntities(row[18].toLowerCase()), row[16].toLowerCase()) + "." + convertSubCategories(htmlEntities(row[18]).toLowerCase(), row[16].toLowerCase(), row[6].toLowerCase(), row[27].toLowerCase()),
          htmlEntities(row[5]),
          null,
          null,
          null,
          findMatches({
          id: row[3],
          gender: row[16].toLowerCase(),
          category: htmlEntities(row[17].toLowerCase()),
          subCategory: htmlEntities(row[18].toLowerCase()),
          altCat: convertCategories(htmlEntities(row[18].toLowerCase())),
          size: row[19],
          description: htmlEntities(row[27].toLowerCase())
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
}

