function onEdit(e) {
  
  var range = e.range;
  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var column = range.getColumn();
  var row = range.getRow();
  var colorValue = e.value;
  var returnValues = [];
  
  if(sheetName == 'MAIN' && column == 2 && row == 1)
  {
    var ss= SpreadsheetApp.getActiveSpreadsheet();
    var dataSheet = ss.getSheetByName("DATA");
    var mainSheet = ss.getSheetByName("MAIN");
    
    //GET SQL STATEMENT
    var lastRowData = dataSheet.getLastRow();    
    for(var i = 2; i <= lastRowData; i++)
    {
     if(colorValue == dataSheet.getRange(i, 1).getValue())
     {
       returnValues.push(dataSheet.getRange(i, 2).getValue());      
     }
    }
    
    mainSheet.getRange('B2').clear();
    var dropdown = mainSheet.getRange('B2');
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(returnValues).build();
    dropdown.setDataValidation(rule);

  }

}