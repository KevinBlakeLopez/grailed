const brandsgateway = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  "brandsgateway-inventory"
);
const grailed =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("grailed-inventory");

const link =
  "https://brandsgateway.com//wp-json/wc-brandsgateway/v1/dropshipping-catalog/?api_key=BP5J4SRL7z8w74nv4TRX&&lang=en&format=csv&download=1";

// const conversion = convertEUtoUS();
const conversion = 1.1;

function fetchMapCSV() {
  grailed.clear();
  grailed
    .getRange(1, 1, 1, 22)
    .setValues([
      [
        "external_seller_reference",
        "inventory",
        "title",
        "description",
        "category",
        "designer",
        "designer2",
        "designer3",
        "size",
        "exact_size",
        "condition",
        "color",
        "price",
        "tags",
        "photo_urls",
        "shipping_us",
        "shipping_ca",
        "shipping_uk",
        "shipping_eu",
        "shipping_asia",
        "shipping_au",
        "shipping_other",
      ],
    ]);

  let response = UrlFetchApp.fetch(link).getContentText();
  const brandsGatewayInventory = Utilities.parseCsv(response);

  brandsGatewayInventory.shift();

  const grailedInventory = brandsGatewayInventory
    .filter(
      (row) =>
        row[0].trim().toLowerCase() !== "parent" &&
        (row[16].trim().toLowerCase() === "men" ||
          row[16].trim().toLowerCase() === "women")
    )
    .map((row) => {
      if (row[16].trim().toLowerCase() === "men") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
          "original  size on tag: " + row[19] + "\n" + row[27],
          createOptionsArray(
            convertCategories(
              htmlEntities(row[18].trim().toLowerCase()),
              row[16].trim().toLowerCase(),
              row[17].trim().toLowerCase(),
              row[6].trim().toLowerCase(),
              row[27].trim().toLowerCase()
            ) +
              "." +
              convertSubCategories(
                htmlEntities(row[18]).trim().toLowerCase(),
                row[16].trim().toLowerCase(),
                row[6].trim().toLowerCase(),
                row[27].trim().toLowerCase(),
                row[17].trim().toLowerCase(),
                convertCategories(
                  htmlEntities(row[18].trim().toLowerCase()),
                  row[16].trim().toLowerCase(),
                  row[17].trim().toLowerCase(),
                  row[6].trim().toLowerCase(),
                  row[27].trim().toLowerCase()
                )
              )
          ),
          htmlEntities(row[5]),
          null,
          null,
          row[19],
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
          0,
        ];
      } else if (row[16].trim().toLowerCase() === "women") {
        return [
          row[3],
          row[20],
          htmlEntities(row[5]) + " " + row[6],
          "original size on tag: " + row[19] + "\n" + row[27],
          createOptionsArray(
            "womens_" +
              convertCategories(
                htmlEntities(row[18].trim().toLowerCase()),
                row[16].trim().toLowerCase(),
                row[17].trim().toLowerCase()
              ) +
              "." +
              convertSubCategories(
                htmlEntities(row[18]).trim().toLowerCase(),
                row[16].trim().toLowerCase(),
                row[6].trim().toLowerCase(),
                row[27].trim().toLowerCase(),
                row[17].trim().toLowerCase()
              )
          ),
          htmlEntities(row[5]),
          null,
          null,
          null,
          row[19],
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
          0,
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

  const resultSet = grailed.getSheetValues(2, 5, grailed.getLastRow(), 1);
  resultSet.forEach((item, index) => {
    try {
      const options = JSON.parse(item);
      const cell = grailed.getRange(index + 2, 5, 1, 1);
      // Clear existing Dropdown
      cell.setDataValidation(null);
      // Create new options Dropdown
      cell.setValues([["Option Selection Required"]]);
      const rule =
        SpreadsheetApp.newDataValidation().requireValueInList(options);
      cell.setDataValidation(rule);
      // Store SKU and Options Array in Script Properties (persistance)
      const sku = grailed.getSheetValues(index + 2, 5, 1, 1);
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.setProperties({
        [sku]: options,
      });
    } catch (e) {}
  });
}

function clearSheet() {
  grailed.clearContents();
}
