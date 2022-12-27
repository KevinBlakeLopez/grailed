function onOpen() {
  var ui = SpreadsheetApp.getUi();
  let menue = ui.createMenu("Utilites");
  menue.addItem(`BG Data`, "populateBGSheet");
  menue.addToUi();
}

function htmlEntities(str) {
  return String(str)
    .replace(/&amp;/, "&")
    .replace(/&#8217;/, "'");
}

function populateBGSheet() {
  brandsgateway.clear();
  console.log(brandsgateway.getMaxRows());

  const howManyToDelete = brandsgateway.getMaxRows() - 1;
  brandsgateway.deleteRows(2, howManyToDelete);

  let response = UrlFetchApp.fetch(link).getContentText();
  let brandsGatewayInventory = Utilities.parseCsv(response);

  brandsGatewayInventory = brandsGatewayInventory.filter(
    (row) => row[0].toLowerCase() !== "parent"
  );

  let startRow = 1;
  let startCol = 1;

  let numRows = brandsGatewayInventory.length;
  let numColumns = brandsGatewayInventory[0].length;

  // brandsgateway.insertRows(brandsgateway.getLastRow(), brandsGatewayInventory.length);

  // Appends data into the sheet.
  brandsgateway
    .getRange(startRow, startCol, numRows, numColumns)
    .setValues(brandsGatewayInventory);
}

function wholesaleMarkup(price) {
  return price * 2.5 + 100;
}

function convertEUtoUS() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const apikey = scriptProperties.getProperty("APIKEY");

  const response = UrlFetchApp.fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=1",
    {
      headers: {
        apikey: apikey,
      },
    }
  );
  const res = JSON.parse(response.getContentText());
  return res.result;
}
