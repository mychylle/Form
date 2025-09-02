function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveData(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([data.name || '', data.score || '', new Date()]);
  return 'ok';
}
