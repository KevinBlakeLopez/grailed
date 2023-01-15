const grailed22 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  "22grailed-inventory"
);

// const conversion = convertEUtoUS();
const conversion = 1.1;

const fileId = "1Pzj_DN87H9qrgby6Ee5ekz15ncZzvcjES4c7LpDbHqU";
const masterSpreadsheet = SpreadsheetApp.openById(fileId);
const masterSheetId = masterSpreadsheet.getActiveSheet().getSheetId();

let csvLink = `https://docs.google.com/spreadsheets/d/${fileId}/export?format=csv&gid=${masterSheetId}`;

let newResponse = UrlFetchApp.fetch(csvLink).getContentText();
let brandsGatewayInventory = Utilities.parseCsv(newResponse);

function fetchMapCSV22() {
  grailed22.clear();
  grailed22
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

  // let response = UrlFetchApp.fetch(link).getContentText();
  // const brandsGatewayInventory = Utilities.parseCsv(response);

  brandsGatewayInventory.shift();

  const grailedInventory = brandsGatewayInventory
    .filter(
      (column) =>
        column[0].trim().toLowerCase() !== "parent" &&
        (column[16].trim().toLowerCase() === "men" ||
          column[16].trim().toLowerCase() === "women" ||
          column[16].trim().toLowerCase() === "unisex")
    )
    .map((column) => {
      if (
        column[16].trim().toLowerCase() === "men" ||
        column[16].trim().toLowerCase() === "unisex"
      ) {
        return [
          column[3],
          column[20],
          htmlEntities(column[5]) + " " + column[6],
          "original  size on tag: " + column[19] + "\n" + column[27],
          convertCategories(
            htmlEntities(column[18].trim().toLowerCase()),
            column[16].trim().toLowerCase(),
            column[17].trim().toLowerCase(),
            column[6].trim().toLowerCase(),
            column[27].trim().toLowerCase()
          ) +
            "." +
            convertSubCategories(
              htmlEntities(column[18]).trim().toLowerCase(),
              column[16].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[3]
            ),
          htmlEntities(column[5]),
          null,
          null,
          convertSize(
            column[19].trim().toLowerCase(),
            column[17].trim().toLowerCase(),
            htmlEntities(column[18].trim().toLowerCase()),
            column[16].trim().toLowerCase(),
            convertCategories(
              htmlEntities(column[18].trim().toLowerCase()),
              column[16].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase()
            ),
            convertSubCategories(
              htmlEntities(column[18].trim().toLowerCase()),
              column[16].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[3]
            ),
            column[3],
            column[6]
          ),
          null,
          "new",
          column[21].toLowerCase(),
          Math.round(wholesaleMarkup(column[8] * conversion) / 10) * 10,
          htmlEntities(column[5].replace(/\s/g, "").toLowerCase()),
          column[13],
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ];
      } else if (column[16].trim().toLowerCase() === "women") {
        return [
          column[3],
          column[20],
          htmlEntities(column[5]) + " " + column[6],
          "original size on tag: " + column[19] + "\n" + column[27],
          "womens_" +
            convertCategories(
              htmlEntities(column[18].trim().toLowerCase()),
              column[16].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase()
            ) +
            "." +
            convertSubCategories(
              htmlEntities(column[18]).trim().toLowerCase(),
              column[16].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[3]
            ),
          htmlEntities(column[5]),
          null,
          null,
          null,
          convertSize(
            column[19].trim().toLowerCase(),
            column[17].trim().toLowerCase(),
            htmlEntities(column[18].trim().toLowerCase()),
            column[16].trim().toLowerCase(),
            convertCategories(
              htmlEntities(column[18].trim().toLowerCase()),
              column[16].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase()
            ),
            convertSubCategories(
              htmlEntities(column[18].trim().toLowerCase()),
              column[16].trim().toLowerCase(),
              column[6].trim().toLowerCase(),
              column[27].trim().toLowerCase(),
              column[17].trim().toLowerCase(),
              column[3]
            ),
            column[3],
            column[6]
          ),
          "new",
          column[21].toLowerCase(),
          Math.round(wholesaleMarkup(column[8] * conversion) / 10) * 10,
          htmlEntities(column[5].replace(/\s/g, "").toLowerCase()),
          column[13],
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
  grailed22
    .getRange(startRow, startCol, numRows, numColumns)
    .setValues(grailedInventory);

  // const resultSet = grailed22.getSheetValues(2, 5, grailed22.getLastRow(), 1);
  // resultSet.forEach((item, index) => {
  //   try {
  //     const options = JSON.parse(item);
  //     const cell = grailed22.getRange(index + 2, 5, 1, 1);
  //      // Clear existing Dropdown
  //     cell.setDataValidation(null)
  //      // Create new options Dropdown
  //     cell.setValues([["Option Selection Required"]]);
  //     const rule =
  //       SpreadsheetApp.newDataValidation().requireValueInList(options);
  //     cell.setDataValidation(rule);
  //     // Store SKU and Options Array in Script Properties (persistance)
  //     const sku = grailed22.getSheetValues(index + 2, 5, 1, 1);
  //     const scriptProperties = PropertiesService.getScriptProperties();
  //     scriptProperties.setProperties({
  //       [sku]: options,
  //     });
  //   } catch (e) {}
  // });
}

function clearSheet22() {
  grailed22.clearContents();
}
