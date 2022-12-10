function onOpen(){
  var ui = SpreadsheetApp.getUi();
  let menue = ui.createMenu('Utilites');
  menue.addItem(`BG Data`, 'populateBGSheet');
  menue.addToUi()  
}


function htmlEntities(str) {
  return String(str)
    .replace(/&amp;/, "&")
    .replace(/&#8217;/, "'");
}

function populateBGSheet() {
  brandsgateway.clear()
  console.log(brandsgateway.getMaxRows())

  const howManyToDelete = brandsgateway.getMaxRows() - 1;
  brandsgateway.deleteRows(2, howManyToDelete);
  
  let response = UrlFetchApp.fetch(link).getContentText();
  let brandsGatewayInventory = Utilities.parseCsv(response);

  brandsGatewayInventory = brandsGatewayInventory.slice(0,100).filter(row => row[0].toLowerCase() !== "parent");

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
  return (price * 2.5) + 100;
}

function convertEUtoUS(price) {
  const apiKey = "EhMTro6NJ5sqjjN2yKgCr7pJDWHK2KIW";
  const url = "https:/api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=";

  UrlFetchApp.fetch(url + price, {
        "headers":{
            "TRN-Api-Key":apiKey
        }
    })
    .then(response => response.json())
    .then(result => wholesaleMarkup(result.result))
    .catch(error => console.log("error", error));
}