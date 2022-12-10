import fetch, {Headers} from 'node-fetch';

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

function convertEUtoUS(price) {
  let myHeaders = new Headers();
  myHeaders.append("apikey", "EhMTro6NJ5sqjjN2yKgCr7pJDWHK2KIW");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders
  };

  fetch(`https:/api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=${price}`, requestOptions)
    .then(response => console.log(response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

convertEUtoUS(100);