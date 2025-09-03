function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var values = sheet.getDataRange().getValues();
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveData(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([data.name || '', data.score || '', new Date()]);
  return 'ok';
}
